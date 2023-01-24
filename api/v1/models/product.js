
const mongoose=require('mongoose');// קישור לספריית מונגוס
const ProductSchema=mongoose.Schema({// יצירת אובייקט מסוג סכימה, מבנה הנתונים המשקף את האוסף/ טבלה
    _id:mongoose.Schema.Types.ObjectId,
    Pid:Number,
    Pname:String,
    Price:Number,
    Pdesc:String,
    PicName:String
    },{ versionKey: false }); 
// יצירת מודל - מבנה המייצג את אוסף המוצרים בבסיס הנתונים
module.exports=mongoose.model('products',ProductSchema);