const express = require('express');
const app = express();
const routes = require('./routes')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',routes)
module.exports = app



