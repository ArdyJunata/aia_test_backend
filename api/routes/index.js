const express = require('express');
const routes = express.Router();

const imageRoutes = require('./feedRoutes');

routes.use("/images", imageRoutes);

module.exports = routes;