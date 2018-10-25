const express = require('express');
const app = express();
const session = require('express-session')
let port = 3000;
app.listen(port,function(){
  console.log(`App running on port : ${port}`)
})
const bodyParser = require('body-parser');
const AdminRoute = require('./routes/admin')
const SessionRoute = require('./routes/session')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(session({
  secret: 'haha'
}))
app.use('/admin', AdminRoute)
app.use('/session', SessionRoute)

// app.locals.helper = require('./helpers')