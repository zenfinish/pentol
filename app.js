const express = require('express')
const app = express()
app.set('view engine', 'ejs')
let port = 3000
const StudentRoute = require('./routes/students')
const TestRoute = require('./routes/test')
const bodyParser = require('body-parser');
// app.locals.helper = require('./helpers')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.listen(port,function(){
console.log(`App running on port : ${port}`)
})
app.use('/students', StudentRoute)