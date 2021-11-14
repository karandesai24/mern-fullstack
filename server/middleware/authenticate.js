const jwt=require('jsonwebtoken');
const User =require("../models/userschema");

const Authenticate=async (req,res,next)=>{
    try{
        const token=req.cookies.jwtoken;
        const verifyToken=jwt.verify(token,'qwertyuioplkjhgfdsazxcvbnmmnbvcx');
        const rootUser=await User.findOne({_id:verifyToekn._id,"tokens:token":token});
        if(!rootUser){ throw new Error ('user not found')

        }
        req.token=token;
        req.rootUser=rootUser;
        req.userId=rootUser._id;
        next();



    }catch(err){
        res.status(401).send('no token provided');

    }


}
module.exports= Authenticate;