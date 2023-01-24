const mongoose=require('mongoose');

// ייצוא אובייקט עם חמש פונקציות עבור כל אחת מהפעולות
// המטרה שכל הלוגיקה תשב בקובץ הנוכחי
module.exports={

GetAllProducts:(req,res)=>{
    // const ProductSchema=mongoose.Schema({// יצירת אובייקט מסוג סכימה, מבנה הנתונים המשקף את האוסף/ טבלה
    //     _id:mongoose.Schema.Types.ObjectId,
    //     Pid:Number,
    //     Pname:String,
    //     Price:Number,
    //     Pdesc:String,
    //     PicName:String
    //     },{ versionKey: false }); 
    // // יצירת מודל - מבנה המייצג את אוסף המוצרים בבסיס הנתונים
    // const ProductModel=mongoose.model('products',ProductSchema);
   const ProductModel=require('../models/product');// קישור למודל של אוסף המוצרים
    
  ProductModel.find().then((products)=>{
        console.log(products);
        return res.status(200).json(products);
       }); 
    
},
GetProductById:(req,res)=>{
    // const ProductSchema=mongoose.Schema({// יצירת אובייקט מסוג סכימה, מבנה הנתונים המשקף את האוסף/ טבלה
    //     _id:mongoose.Schema.Types.ObjectId,
    //     Pid:Number,
    //     Pname:String,
    //     Price:Number,
    //     Pdesc:String,
    //     PicName:String
    //     },{ versionKey: false }); 
    // // יצירת מודל - מבנה המייצג את אוסף המוצרים בבסיס הנתונים
    // const ProductModel=mongoose.model('products',ProductSchema);
    const ProductModel=require('../models/product');// קישור למודל של אוסף המוצרים
    
  ProductModel.findOne({Pid:req.params.id}).then((product)=>{
        console.log(product);
        return res.status(200).json(product);
       }); 
    
},
AddProduct:(req,res)=>{
  //  let connection=global.db;
    // const pname=req.body.pname;
    // const pdesc=req.body.pdesc;
    // const picname=req.body.picname;
  
    const ProductModel=require('../models/product');// קישור למודל של אוסף המוצרים
    
  ProductModel.insertMany(req.body).then((result)=>{
        console.log(result);
        return res.status(200).json(result);
       }); 
 //   
 //   return res.status(200).json(req.body);
},
DeleteProduct:()=>{},
UpdateProduct:()=>{}

};