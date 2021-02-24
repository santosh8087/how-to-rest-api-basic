## Prerequisites

#### Google OAuth client ID
#### nodeJS v 12+
#### redis

### OAuth client ID creation

Go to the Google developer console: https://console.developers.google.com/apis/credentials

Select or create a Google project.

Navigate to the credentials page — in the left sidebar — and create an OAuth client ID.

configure consent screen

while creating Create OAuth client ID add Authorised redirect URIs as your node url where we want to redirect user when he try login with google e.g. http://localhost:4000/auth/google

After creation done we get CLIENT_ID and CLIENT_SECRET for googleapi client.


### Installation
npm install

### Build
npm run build

### Start Server
npm start

### API details

#### 1)generate URL
##### URL: http://localhost:4000/auth/google/url
method:GET

This API return url ,By using that url User can login with google

#### 2)Redirect API
##### URL: http://localhost:4000/auth/google
method:GET

This API use as redirect URL. When user select login with google and gives reqired permission then this request is redirected from google to this API.

User token is generated in this API and saved in redis for accessing userdetails in future.

#### 3)Get Message ID
##### URL: http://localhost:4000/user/messageid
method:POST

body params:email

email is user email which is saved in cache.

This API return messageid from user saved in redis cache server.

Using email we get token details for user from cache and fetch emailid.

#### 4)Read Message
##### URL: http://localhost:4000/user/messageid
method:POST

body params:email,msgId

email is useremail and msgId is the id of message which we have to read.

This API return all detailas of message for given messageid(msgId)

### REFERANCES

#### Gmail api
###### https://developers.google.com/gmail/api/reference/rest/v1/users.messages
###### https://developers.google.com/gmail/api/quickstart/nodejs

### googleapi npm doc
##### https://github.com/googleapis/google-api-nodejs-client
##### https://github.com/googleapis/google-auth-library-nodejs#readme


#### scope document
##### https://developers.google.com/identity/protocols/oauth2/scopes=>search for gmailreadonly scope
##### https://developers.google.com/gmail/api/auth/scopes
