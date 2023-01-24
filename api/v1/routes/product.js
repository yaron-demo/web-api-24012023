// נגדיר אובייקט מסוג ראוטר
const router=require('express').Router();
// קישור לקובץ קוד של המוצרים
const ProductController=require('../controllers/product');
const x={

    GetAllProducts:(req,res)=>{
        const ProductModel=require('../models/product');
        ProductModel.find().then((products)=>{
            console.log(products);
            return res.status(200).json(products);
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

// הגדרנו ניתוב - נקודת קצה שביטת גט לנתיב של מצר
router.get("/",ProductController.GetAllProducts);

/// שליפת מוצר לפי קוד מוצר
router.get("/:id",ProductController.GetProductById);

// עדכון מוצר לפי קוד מוצר
router.put("/:id",(req,res)=>{
    return res.status(200).json({Msg:"Update Product By Id"  + req.params.id});
});

// הוספת מוצר חדש
router.post("/",ProductController.AddProduct);

// מחיקת מוצר לי קוד מוצר
router.delete("/:id",(req,res)=>{
    return res.status(200).json({Msg:"Delete Product By Id"  + req.params.id});
});
/// נוסיף שכבות מתאימות


module.exports=router;