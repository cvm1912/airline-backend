const express = require('express')
const router = express.Router()
router.get('/info', (req,res)=>{
    return res.json({
        name:"shivam singh",
        mail:"rajshivam1912@gmail.com"
    })
})

module.exports = router;