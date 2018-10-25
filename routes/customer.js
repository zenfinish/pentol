const express = require('express');
const CustomerController = require('../controllers/customer.js');

const app = express();

app.get('/', CustomerController.showMain);

module.exports = app;