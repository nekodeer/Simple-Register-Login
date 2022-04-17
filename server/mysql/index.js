const mysql = require('mysql');
let client = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'weblogin'
})

//query是数据库的操作方法，我们可以封装成一个函数，接受三个参数，
// 分别是sql语句，sql语句的参数，回调函数返回值
function sqlFn(sql,arr,callback){
  client.query(sql,arr,function(error,result){
    if(error){
      console.log(error);
      return;
    }
    //回调函数
    callback(result)
  })
}

module.exports = sqlFn