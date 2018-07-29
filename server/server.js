const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const router = require('./routes/route');
var cors = require('cors')
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.static(path.join(__dirname, '../client/dist/bloga')));


mongoose.connect('mongodb://localhost:27017/bloga');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/api',router)

app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname, '../client/dist/bloga/index.html'))
}) 
app.use(cors());
app.listen(3000)