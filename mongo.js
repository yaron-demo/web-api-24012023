const mongoose=require('mongoose'); // קישור לספריית מונגוס
const Conn_str="mongodb+srv://yaronadmin:yaron123@cluster0.ov55s.mongodb.net/ecomdb";// הגדרת מחרוזת ההתחברות לשרת של מונגו
mongoose.connect(Conn_str);// פיתחת החיבור לבסיס הנתונים
// הגדרת סכימה/ מבנה של אוסף /טבלה של מוצרים
const ProductSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Pid:Number,
    Pname:String,
    Price:Number,
    Pdesc:String,
    PicName:String
    },{ versionKey: false }); 
// יצירת מודל - מבנה המייצג את אוסף המוצרים בבסיס הנתונים
const ProductModel=mongoose.model('products',ProductSchema);
// הפעלת השיטה 
// find
//  על המודל והדפסה ללוג את תוצאת השאילתה
ProductModel.find().then((products)=>{
 console.log(products);
}); 
ProductModel.insertMany({Pid:44,Pname:'Cheese',Price:66,Pdesc:'best Cheese',PicName:'cheese.jpg'}).then((data)=>{
    console.log(data);
});
