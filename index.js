const express = require('express');
const app = express();


const morgan = require('morgan');
const bodyParser = require('body-parser');
const { port, env } = require('./config/environment');


if('test' !== env) app.use(morgan('dev'));
app.use(express.static('portfolio-site/public'));
app.use(bodyParser.json());


app.get('/*', (req, res) => res.sendFile('portfolio-site/public/index.html'));


app.listen(port, () => console.log(`Express is listening on port ${port}`));

module.exports = app;
