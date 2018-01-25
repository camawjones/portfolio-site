const express = require('express');
const app = express();


const morgan = require('morgan');
const bodyParser = require('body-parser');
const { port, env } = require('./config/environment');


if('test' !== env) app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());


app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));


app.listen(port, () => console.log(`Express is listening on port ${port}`));

module.exports = app;
