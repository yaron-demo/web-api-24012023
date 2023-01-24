const bcrypt=require('bcrypt');
const pass="abc123";
const saltRounds=10;
let xxx="";
hashpass=bcrypt.hash(pass,saltRounds,(err,hashPass)=>{
 if(err)
 console.log(err.message);
 else
 {
    console.log(hashPass);
    xxx=hashPass;
 }
 
}); 
console.log(xxx);