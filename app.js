const express = require('express'),
    app = express(),
    cors = require('cors'),
    routes = require('./api/routes');

const options = {
    'Access-Control-Allow-Methods': 'PATCH,GET,PUT,POST,DELETE',
    'Access-Control-Allow-Origin': '*'
}

app.use(cors(options));

app.use(routes);

app.use('/', (req, res) => {
    res.send('its works!');
});

module.exports = app;