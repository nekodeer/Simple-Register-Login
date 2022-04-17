const express = require("express")
const router = express.Router();
const isEmpty = require("lodash/isEmpty")
const validator = require("validator")
const sqlFn = require('../mysql')

//验证数据
const validatorInput = (data) => {
  let errors = {};
  if (validator.isEmpty(data.username)) {
    errors.username = "Please input username"
  }
  //validator用于验证邮箱的方法，
  if (!validator.isEmail(data.email)) {
    errors.email = 'Please input email'
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'Please input password'
  }
  if (validator.isEmpty(data.cfmPassword)) {
    errors.cfmPassword = "Please confirm the password"
  }
  //validate the password and the cfmPassword
  if (!validator.equals(data.password, data.cfmPassword)) {
    errors.cfmPassword = "The password does not match!"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

router.post("/", (req, res) => {
  const { errors, isValid } = validatorInput(req.body)
  //不为空则有问题
  if (!isValid) {
    res.status(400).json(errors);
  }
  else {
    // 创建sql语句，null三个参数分别为用户名，密码，邮箱，动态添加
    const sql = "insert into user values (null,?,?,?)"
    //arr是sql的参数
    const arr = [req.body.username,req.body.password,req.body.email]
    sqlFn(sql,arr,result=>{
      if(result.affectedRows){
        res.status(200).json({ msg: true })
      }
      else{
        res.status(400).json({ msg: '注册失败' })
      }
    })
    
  }
})

// 验证用户名唯一性的接口
router.get('/:username',(req,res) => {
  let sql = "select * from user where `username`=?";
  let arr = [req.params.username];
  sqlFn(sql,arr,result=>{
    if(result){
      //如果有返回结果说明用户名存在
      res.send(result)
    }
    else{
      // 返回空对象表示可以注册
      res.send({})
    }
  })
})

// router.get('/:email',(req,res) => {
//   let sql = "select * from user where `email`=?";
//   let arr = [req.params.email];
//   sqlFn(sql,arr,result=>{
//     if(result){
//       //如果有返回结果说明存在
//       res.send(result)
//     }
//     else{
//       // 返回空对象表示可以注册
//       res.send({})
//     }
//   })
// })


// 导出router 模块
module.exports = router;