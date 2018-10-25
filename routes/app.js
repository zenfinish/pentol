const express = require('express');
const AppController = require('../controllers/app.js');

const app = express();

app.get('/', AppController.showIndex);
app.post('/cekLogin', AppController.cekLogin);
app.get('/logout', AppController.logout);
app.post('/register', AppController.register);

module.exports = app;