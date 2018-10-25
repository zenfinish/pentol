const express = require('express');
const AdminController = require('../controllers/admin.js');

const app = express();

app.get('/', AdminController.showMain);

module.exports = app;