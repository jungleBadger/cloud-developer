// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'e3wn51oni2'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'junglebadger.auth0.com',            // Auth0 domain
  clientId: 'uERpqzbMJXxnlGddZZfTY9sPhNJJtcRa',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
