var express = require('express');//imports express js
var bodyParser = require('body-parser');//enable the express app to read the incoming body
var logger = require('morgan');//for logging all http request 
var methodOverride = require('method-override')//allows to use put and delete request
var cors = require('cors');//cross origin resource sharing enables ionic to communicate with server
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.get('/users',(req,res)=>{
    res.json({
        'id':1,
        'name':"Gaurav Prasad"
    })
})
app.listen(process.env.PORT||3000);
