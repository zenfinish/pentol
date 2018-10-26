const express = require('express');
const app = express();
app.use(express.static('public'))

const bodyParser = require('body-parser');
const session = require('express-session');
const auth = require('./middlewares/auth.js');

const appRoute = require('./routes/app.js');
const adminRoute = require('./routes/admin.js');
const customerRoute = require('./routes/customer.js');

const port = 3000;

app.set('view engine', 'ejs');

// app.locals.helper = require('./helpers')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 6000000 }}))

app.use('/', appRoute);
app.use('/admin', auth, adminRoute);
app.use('/customers', auth, customerRoute);

app.listen(port,function(){
    console.log(`App running on port : ${port}`)
});
