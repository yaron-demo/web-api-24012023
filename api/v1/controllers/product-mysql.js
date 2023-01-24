

// ייצוא אובייקט עם חמש פונקציות עבור כל אחת מהפעולות
// המטרה שכל הלוגיקה תשב בקובץ הנוכחי
module.exports={

GetAllProducts:(req,res)=>{
    let connection=global.db;
    connection.query("select * from t_products",function(err,rows,fields){
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
    
},
GetProductById:(req,res)=>{
    let connection=global.db;
    console.log("select * from t_products where pid="+req.params.id);
    connection.query("select * from t_products where pid="+req.params.id,function(err,rows,fields){
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
    
},
AddProduct:(req,res)=>{
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
},
DeleteProduct:()=>{},
UpdateProduct:()=>{}

};