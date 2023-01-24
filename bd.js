const bcrypt=require('bcrypt');
const pass="abc123";
const saltRounds=10;
const
hashFromDb="$2b$10$.2XXir/AaewR4JPfKttpPeiJV31ti3/ZEBZlbRNA8q6d32CcQ7Psy";
bcrypt.compare(pass,hashFromDb,(err,status)=>{
 if(err)
 console.log(err.message);
 else
 console.log(status);
}); 
