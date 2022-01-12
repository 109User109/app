const router = require("express").Router()

router.get('/login',(req,res)=>{
    res.render('users/login')
});

router.get('/signin',(req,res)=>{
    res.render('users/signin')
});


module.exports = router;