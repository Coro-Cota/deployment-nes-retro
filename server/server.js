const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

const { getHTML, getCSS, getJS } = require('./controller');

app.get('/', getHTML);
app.get('/css', getCSS);
app.get('/js', getJS);

// include and initialize the rollbar library with your access token
let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: '9c9fd64f5e544229865f2846d0a01b0e',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')
rollbar.log('This website works!')

const port = process.env.PORT //we don't have an env file but Heroku does so this reads from Heroku

app.listen(port, console.log(`Server running on ${port}`))