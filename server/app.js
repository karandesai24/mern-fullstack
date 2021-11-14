
const mongoose =require('mongoose');
const express = require('express');
const app= express();
//dotenv.cofig ({path :'./config.env'});
const port= process.env.PORT || 4000;

require('./db/conn');
app.use(express.json());

app.use(require('./router/auth'));
//const User= require('./models/userschema');




app.get('/contact',(req,res) =>{
    res.send(`Hello`);

});
app.get('/register',(req,res) =>{
    res.send(`Helo`);

});
app.get('/signup',(req,res) =>{
    res.send(`Hello`);

});
app.listen(port,()=> {
    console.log(`running`);
})
