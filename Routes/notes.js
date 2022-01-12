const router = require("express").Router()

router.get('/Notes',(req,res)=>{
    res.send("Notes")
});

module.exports = router;