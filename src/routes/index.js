const express = require('express');
const nos = require('./noRoutes.js');
const pontes = require('./ponteRoutes.js');

module.exports = app => {
    app.use(
        express.json(),
        nos,
        pontes
    );
};