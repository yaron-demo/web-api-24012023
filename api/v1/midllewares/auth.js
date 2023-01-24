const jwt=require('jsonwebtoken');
module.exports=function(req,res,next){
    try{
        const PrivateKey=process.env.PRIVATEKEY;
        const token=req.headers.authorization.split(' ')[1];
        const user=jwt.verify(token,PrivateKey);
        next();
    }
 catch(err)
 {
    console.log(err.message);
    return res.status(401).json({Msg:"You are not authorized "});
 }
    };