const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
app.use(cors());
const postsRoute = require('./routes/posts');

app.use('/',postsRoute);

app.get('/',(req,res)=>{
     res.send("We are on home");
})

mongoose.connect(process.env.DB_CONNECTION,
     {useNewUrlParser:true},()=>
     console.log('Connected to database')
)
app.listen(4000);