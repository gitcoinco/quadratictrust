# Quadratic Trust Backend API

live demo:
https://quadratictrust.com/api

# Dependency
* Node
* Postgres
* Twitter developer account

# API

1. /api/users
   - list of top 10 users for leaderboard
2. /api/users/:username
   - user profile - vistor page
3. /api/search/:str
   - for autocomplete search
4. POST /api/login
   - login to twitter account
5. /api/logout
   - logout from twitter account
6. GET /api/ballots?voter=:username
   - details of votes received and gave out
7. POST /api/optout
   - optout of the game
8. POST /api/tweet
   - tweet a message
   - body parameters: message
9. POST /api/vote
   - cast a vote
   - body parameters: candidate, score

# Setup

1. twitter

   1. create a developer account at https://developer.twitter.com
   2. setup keys and tokens under `Projects & Apps`:
      https://developer.twitter.com/en/portal/dashboard
   3. setup oauth callback url in settings
      - Enable 3-legged OAuth

2. postgres

   1. how to provision postgres on heroku:

   - https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-heroku-postgres

   ```
   heroku addons:create heroku-postgresql:hobby-dev
   ```

   - to get postgres url from heroku

   ```
   heroku pg:credentials:url DATABASE --app <appname>
   ```

   2. how to install postgres on ubuntu manually:
      Ubuntu includes PostgreSQL by default, so, can simply use the `apt-get` command:

   ```
   apt-get install postgresql-12
   # createdb
   # createuser [username] --interactive
   ALTER ROLE username WITH PASSWORD 'xxx';
   ```

3. heroku

   If you use heroku as your hosting service, follow the following instructions:

   - follow the heroku instruction to download heroku cli
      https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

      ```
          heroku create
          git push heroku main
      ```

   - setup config
      - go to https://dashboard.heroku.com app settings
      - click the `Reveal Config Vars` to setup these environment variables
        - DATABASE_URL - postgres database url
        - TWITTER_CONSUMER_KEY - consumer keys
        - TWITTER_CONSUMER_SECRET - consumer secret
        - TWITTER_BEARER_TOKEN - Bearer Token
        - TWITTER_ACCESS_TOKEN_KEY - access token key
        - TWITTER_ACCESS_TOKEN_SECRET - access token secret

4. AWS hosting

   To use AWS ubuntu, you can setup using nginx
   - login to the server and open a terminal
   - git clone this repository
   - follow the instruction in references to setup tls and nginx
   - nginx config: /etc/nginx/sites-available/default
   - after updating the source code,
      ```
         cd api
         npm run restart
         sudo nginx -t
         sudo systemctl restart nginx
      ```

# Troubleshooting

1. Twitter callback url not setup
   - error: Desktop applications only support the oauth_callback value 'oob'/oauth/request_token
2. Postgres - gen_random_uuid() not found
   ```
   sudo - u postgres psql
   \c databasename
   create extension pgcrypto;
   ```

# References
- [let's encrypt and nginx](https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/)
- How to install certbot on ubuntu
   ```
   which snap
   sudo snap install core; sudo snap refresh core
   sudo snap install --classic certbot
   sudo ln -s /snap/bin/certbot /usr/bin/certbot
   sudo certbot --nginx
   systemctl list-timers
   ```
