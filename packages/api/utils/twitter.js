const createError = require('http-errors')
const TwitterLite = require('twitter-lite')

require('../config/load-config')()

const USER_PROFILE_FIELDS = 'name,profile_image_url,public_metrics'
const MAX_USER_PROFILES = 100

const TWITTER_DEFAULT_PROFILE_URL =
  'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png'

const handleError = (e) => {
  if ('errors' in e) {
    // Twitter API error
    if (e.errors[0].code === 88) {
      // rate limit exceeded
      throw new createError(
        429,
        'Rate limit will reset on',
        new Date(e._headers.get('x-rate-limit-reset') * 1000)
      )
    } else {
      throw new createError(400, e.errors[0].message)
    }
  }
  throw new createError(500, e.message)
}

// twitter profile url is typically of size 48x48, the _bigger variants is of size 73x73
// https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/user-profile-images-and-banners
const toBiggerResolutionUrl = (url = '') => {
  return url.replace(/\_normal\.(?=[^.]*$)/, '_bigger.')
}

const createClient = ({
  bearerToken,
  accessTokenKey,
  accessTokenSecret,
} = {}) =>
  bearerToken
    ? new TwitterLite({
        version: '2',
        extension: false,
        bearer_token: bearerToken,
      })
    : new TwitterLite({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: accessTokenKey,
        access_token_secret: accessTokenSecret,
      })

const calculateCredits = (total = 0, used = 0) => {
  return total - used
}

const buildUserProfile = (users, userMap) => {
  const profiles = users.map((u) => {
    const extra = userMap.get(u.username)
    const rank = u.rank ? parseInt(u.rank, 10) : null
    if (!extra) {
      return {
        username: u.username,
        name: u.username,
        profileUrl: TWITTER_DEFAULT_PROFILE_URL,
        rank: rank,
        score: u.score,
        credits: 0,
      }
    }
    return {
      username: u.username,
      name: extra.name,
      profileUrl: toBiggerResolutionUrl(extra.profile_image_url),
      rank: rank,
      score: u.score || null,
      credits: calculateCredits(
        extra.public_metrics.followers_count,
        u.creditsUsed
      ),
    }
  })
  return profiles
}

const getUserLookupMap = async (users) => {
  if (users.length > MAX_USER_PROFILES) {
    throw new Error(`Too many users. Only supports ${MAX_USER_PROFILES}`)
  }

  const client = createClient({
    bearerToken: process.env.TWITTER_BEARER_TOKEN,
  })
  const url = 'users/by'

  const usernames = users.map((u) => u.username).join(',')
  const response = await client.get(url, {
    usernames,
    'user.fields': USER_PROFILE_FIELDS,
  })

  const twitterUsers = response.data || []
  const lookup = new Map(twitterUsers.map((user) => [user.username, user]))
  return lookup
}

class Twitter {
  constructor({ accessTokenKey, accessTokenSecret } = {}) {
    // this is used for posting tweets
    if (accessTokenKey && accessTokenSecret) {
      this.user = createClient({
        accessTokenKey,
        accessTokenSecret,
      })
    }
  }

  async userWithProfileUrl(users) {
    if (!users || users.length === 0) {
      return []
    }

    try {
      const userMap = await getUserLookupMap(users)
      return users.map((u) => {
        const { profile_image_url } = userMap.get(u.username) || {}
        const profileUrl = profile_image_url
          ? toBiggerResolutionUrl(profile_image_url)
          : TWITTER_DEFAULT_PROFILE_URL

        return { ...u, profileUrl }
      })
    } catch (e) {
      handleError(e)
    }
  }

  async getUserProfile(user) {
    const profiles = await this.getUserProfiles([user])
    return profiles[0]
  }

  async getUserProfiles(users) {
    if (!users || users.length === 0) {
      return []
    }

    try {
      const userMap = await getUserLookupMap(users)
      return buildUserProfile(users, userMap)
    } catch (e) {
      handleError(e)
    }
  }

  async searchUsers(username, options = {}) {
    const { count = 10, page = 0 } = options
    try {
      const client = createClient({
        accessTokenKey: process.env.TWITTER_ACCESS_TOKEN_KEY,
        accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
      })
      const url = 'users/search'
      const response = await client.get(url, { q: username, count, page })
      const users = response.map((u) => ({ username: u.screen_name }))
      const profiles = await this.getUserProfiles(users)
      return profiles
    } catch (e) {
      handleError(e)
    }
  }

  async getRequestToken() {
    let token
    try {
      const client = createClient()
      const callbackUrl = process.env.TWITTER_CALLBACK_URL
      token = await client.getRequestToken(callbackUrl)
    } catch (e) {
      handleError(e)
    }

    if (!token.oauth_callback_confirmed) {
      throw new createError(401, 'OAuth error')
    }

    return token
  }

  async getAccessToken({ oauthVerifier, oauthToken }) {
    const client = createClient()

    const token = await client.getAccessToken({
      oauth_verifier: oauthVerifier,
      oauth_token: oauthToken,
    })

    return token
  }

  async verifyCredentials() {
    if (!this.user) throw new Error('User not authenticated')
    const result = await this.user.get('account/verify_credentials')
    return {
      name: result.name,
      username: result.screen_name,
      description: result.description,
      followersCount: result.followers_count,
      profileImage: result.profile_image_url_https,
    }
  }

  async postTweet(status) {
    if (!this.user) throw new Error('User not authenticated')

    try {
      const tweet = await this.user.post('statuses/update', {
        status: status,
      })
      return tweet.id
    } catch (e) {
      console.log('error tweeting', e)
      handleError(e)
    }
  }
}

module.exports = Twitter
