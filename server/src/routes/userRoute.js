const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel=require('../models/userModel')
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
      const { username, password } = req.body;
      const doExist=await userModel.findOne({username})
      console.log(doExist);
      if(doExist){
        return res.status(201).json({
            success: false,
            msg: "User name already exist so please register with another name"
          });
      }
      const hashedPass=await bcrypt.hash(password,10)
      const user = await userModel.create({ username, password:hashedPass });
      res.status(201).json({
        success: true,
        msg: "User registered successfully"
      });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
  
router.post('/login',async(req,res)=>{
    const {username,password}=req.body
    const user=await userModel.findOne({username})
    if(!user){
        res.status(404).json({
            success:false,
            msg:"user not found"
        })
    }
    else{
        const isValidPass=await bcrypt.compare(password,user.password)
        if(!isValidPass){
            return res.json({msg:"please enter the correct password"})
        }
        const token=jwt.sign({id:user._id},'secret')
        res.status(200).json({
            success:true,
            user_id:user._id,
            token
        })
    }
})

module.exports = router;