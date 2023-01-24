
const bcrypt=require('bcrypt');
module.exports={

Register:(req,res)=>{
    // רישדום משתמש חדש במערכת
    let connection=global.db;// שמירת החיבור לבסיס הנתונים בתוך משתנה
    const user=req.body.user;// שמירת שם המשתמש שנשלח בתוך גוף הבקשה
    const pass=req.body.pass;// שמירת הסיסמה שנשלחה בתוך גוף הבקשה
    const fullname=req.body.fullname;// שמירת השם המלא שנשלח בתוך גוף הבקשה
    // כעת נצפין את הסיסמה ונשמור את הנתונים בבסיס הנתונים
    bcrypt.hash(pass,10,(err,hashPass)=>{
                            if(err){
                                console.log(err.message);
                                return res.status(500).json(err);
                            }        
                            else
                            {
                                console.log(hashPass);
                                // הוספת המשתמש לבסיס הנתונים
                                let sql=`insert into t_users(user,pass,fullname) values('${user}','${hashPass}','${fullname}')`;
                                console.log(sql);
                                // הפעלת השאילתה והחזרת תשובה למשתמש
                                connection.query(sql,function(err,rows,fields){
                                                                    if(err)
                                                                    {
                                                                        console.log(err.message);
                                                                        return res.status(500).json({Msg:err.message});
                                                                    }
                                                                    else
                                                                    {
                                                                        console.log("Ok");
                                                                        return res.status(200).json(rows);
                                                                    }
                                });

                            }
       
       }); 
 
 //   
 //   return res.status(200).json(req.body);
},
Login:(req,res)=>{
    let connection=global.db;
    const pname=req.body.pname;
    const pdesc=req.body.pdesc;
    const picname=req.body.picname;
  
    let sql="INSERT INTO t_products ( dfdfpname, pdesc, picname) VALUES ( '" + pname +"', '"+ pdesc +"', '" + picname +"')";
    console.log(sql);
    connection.query(sql,function(err,rows,fields){
        if(err)
        {
            console.log(err.message);
            return res.status(500).json({Msg:err.message});
        }
        else
        {
            console.log("Ok");
            return res.status(200).json(rows);
        }
    });
 //   
 //   return res.status(200).json(req.body);
}


};