'use strict'

test('test callback url', async () => {
  const username = 'yuetloo'
  const params = new URLSearchParams({ username })
  const url = `/callback?${params.toString()}`
  const expectedUrl = '/callback?username=yuetloo'
  expect(url).toEqual(expectedUrl)
})
