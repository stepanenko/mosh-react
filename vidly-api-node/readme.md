## Introduction

This project is the backend of Vidly, a video rental app.
This is the implementation of Vidly in Node.js.

### Install the Dependencies

Before installing all dependencies you can update all of them with `ncu -u`

    npm i

### Connect to your DB

    Add a connection URI string into config/default.json as a "db" value
    DONT commit default.json with your db URI to your public github repo

### Populate the Database

    node seed.js

### Start the Server

    node index.js

This will launch the Node server on port 3900. If that port is busy, you can set a different point in config/default.json.

Open up your browser and head over to:

http://localhost:3900/api/genres

You should see the list of genres. That confirms that you have set up everything successfully.

### To midify db data without auth

Change the value of `"requiresAuth"` to `false` inside the `config/default.json`

### (Optional) Environment Variables

If you look at config/default.json, you'll see a property called jwtPrivateKey. This key is used to encrypt JSON web tokens. So, for security reasons, it should not be checked into the source control. I've set a default value here to make it easier for you to get up and running with this project. For a production scenario, you should store this key as an environment variable.

On Windows/Mac:\
`export vidly_jwtPrivateKey=yourSecureKey`
