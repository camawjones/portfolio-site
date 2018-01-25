const express = require('express');
const app = express();

const morgan = require('morgan');

const { port, env } = require('./config/environment');

if('test' !== env) app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, '0.0.0.0', function() {
  console.log(`Listening on Port ${port}`);
});

module.exports = app;
