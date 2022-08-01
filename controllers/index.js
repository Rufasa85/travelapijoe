const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Welocome');
})

module.exports = router;