const express = require('express');
// const bcrypt = require('bcrypt');
// const jst = require('jsonwebtoken');
const {userModel}=require('../models/userModel')
router = express.Router();

module.exports= router.post('/register',async(req,res,err)=>{
const {username,password}=req.body
//await new user({username,password})
//user.save()
res.send({success:true})
})


module.exports = router;
