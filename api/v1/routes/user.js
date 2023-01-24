// נגדיר אובייקט מסוג ראוטר
const router=require('express').Router();
const UserController=require('../controllers/user');



// הרשמת משתמש חדש
router.post("/register",UserController.Register);
// התחברות משתמש קיים
router.post("/login",UserController.Login);


/// נוסיף שכבות מתאימות


module.exports=router;