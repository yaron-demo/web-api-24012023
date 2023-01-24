require('dotenv').config();// טעינתת קובץ ההגדרות של דוט אי אנ וי
const jwt=require('jsonwebtoken'); 
const PrivateKey=process.env.PRIVATEKEY;
const token=jwt.sign({Uid:88},PrivateKey,{expiresIn:'1h'}); 
//console.log(token); 
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVaWQiOjIzLCJpYXQiOjE2NzI3NzAwMjUsImV4cCI6MTY3Mjc3MzYyNX0.FyIR058vNhbIn5TXBpExBm4qy_j_c8kzWPu29lhKqW4
//let obj={Uid:88,Email:"ddd",ww:"xvsdfds"};
//obj.Shlomo="desta";
try{
const pelet=jwt.verify(token,PrivateKey );
console.log(pelet.Uid);
}
catch(err){
console.log(err.message);
}