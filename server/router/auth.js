const express = require('express');
const router = express.Router();
require('../db/conn');
const User =require("../models/userschema");
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken'); 
const authenticate =require('../middleware/authenticate');

router.get('/',(req,res) => {
    res.send(`Hello`);
});


router.post('/register',async (req,res) =>{
    const{ name,email,phone,work,password,cpassword}=req.body;
   
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "Please!fill the fields properly"});
    }

    try{
        const userExist = await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({error :"Email already exists"});
        }else if (password!= cpassword) {
            return res.status(422).json({error :"password don't match"});

        }else{
            const user= new User ({name,email,phone,work,password,cpassword});

            await user.save();
        
            res.status(201).json({message :"sucessfully saved"});

        }    
    } catch(err) { 
        console.log(err);
    }

    
});


router.post('/signin',async (req,res) =>{
    
    try{
        let token;
        const{email,password}= req.body;
        if( !email || !password){
            return res.status(400).json({error:"PLlease fill data"})
        }
        const userLogin = await User.findOne({email:email })


        if (userLogin){
            const isMatch =await bcrypt.compare(password,userLogin.password);
            token = await userLogin.generateAuthToken();
            res.cookie("jwtoken",token, {
                expires:new Date (Date.now()+25892000000),
                httpOnly:true

            });

        //console.log(userLogin);
        if (!isMatch){
            res.status(400).json({error:"invalid credientials 'password'"});
        }else{
            res.json({message:"signin sucessfully"});
        }
    }else{
        res.status(400).json({error:"invalid credientials"});
    }


       

    }catch(err){
        console.log(err);

    }
});


router.get('/about',authenticate,(req,res) =>{
    console.log('aa');
    res.send(req.rootUser);

});

module.exports= router;