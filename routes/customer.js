const express = require('express');
const CustomerController = require('../controllers/customer.js');

const app = express();

app.get('/', CustomerController.showMain);
app.get('/:WarehouseId', CustomerController.pesan);
app.post('/:WarehouseId', CustomerController.savePesan);

module.exports = app;