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

const port = process.env.PORT //we don't have an env file but Heroku does so this reads from Heroku

app.listen(port, console.log(`Server running on ${port}`))