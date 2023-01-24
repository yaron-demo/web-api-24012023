const express=require('express');// חיבור לספריית אקספרס
const app=express();// יצירת אובייקט של אקספרס
const auth=require('./api/v1/midllewares/auth');// חיבור לשכבת האבטה שכתבנןו
const morgan=require('morgan');// חיבור לספריית מורגן  שמבצעת יומן
const cors=require('cors');// ספריית מנגנון קורס לאימות בקשות על פי כתובת דומיין ופרמטרים נוספים
const Productrouter=require('./api/v1/routes/product');// קישור לראוטר של מוצרים שהוגדר בקובץ נפרד
const Userrouter=require('./api/v1/routes/user');
app.use(express.json());//
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));// הוספה של שכבת מורגן
app.use(cors());// הוספת שכבת קורס  שמאפשרת גישה לכל העולם
//app.use(cors());
// הוספת שכבת ביניים של מורגן שמתעדת כל פנייה לשרת בקונסול
// const mysql=require('mysql');// קישור לספריית מיי אסקיואל
// // יצירת אובייקט מסוג קונקשן למיי אסקיואל
// // האובייקט מקבל כתובת שרת, שם משתמש , סיסמה ושם בסיס הנתונים
// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'ecomm'
// });
// // פיתחת החיבור לבסיס הנתונים
// connection.connect(function(err){ // חיבור לבסיס הנתונים
//     if(err)// במידה והייתה שגיאה אז ייכנס למשתנה הזה פירוט של השגיאה
//         console.log(err.message);
//     else//במידה ולא הייתה שגיאה מדפיסים למסך הודעה כללית
//         console.log('Connected to DataBase');
// });
//global.db=connection;// שמירת החיבור לבסיס הנתונים כגלובאלי כך שיוכר בכל מקום בתוכנית

const mongoose=require('mongoose'); // קישור לספריית מונגוס
const Conn_str=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ov55s.mongodb.net/ecomdb`;// הגדרת מחרוזת ההתחברות לשרת של מונגו
mongoose.set('strictQuery', true);
mongoose.connect(Conn_str);// פיתחת החיבור לבסיס הנתונים

//app.use(auth);// הוספת שכבת האוטנטיקציה, אימות
 //
// הוספת שכבה של ניתוב עבור מוצרים
app.use("/product",Productrouter);

app.use("/user",Userrouter);



module.exports=app;