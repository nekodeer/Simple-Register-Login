const express = require("express");
const sqlFn =require("../mysql")
const router = express.Router();
const jwt = require('jsonwebtoken')
const config = require("../config")

router.post("/",(req, res) =>{
  const {username,password} = req.body;
  const sql = "select* from user where `username`=? and `password`=?"
  const arr = [username,password];
  sqlFn(sql,arr,result=>{
    if(result.length>0){    
        //这里应该返回用户信息
        const token = jwt.sign({
          id:result[0].id,
          username:result[0].username
        },config.jwtSecret)
        res.send(token)
    }
    else{
      res.status(401).json({
        errors:'username/password incorrect'
      })
    }
  })
})
module.exports = router;