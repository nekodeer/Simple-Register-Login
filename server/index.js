const express = require("express")
const app = express();
const users = require("./routes/users")
const debug = require('debug')("my-application")
// post请求需要引入body parser
const bodyParser = require("body-parser");
const auth = require("./routes/auth")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//限制访问路径
app.use("/users",users);
app.use("/auth",auth)

app.listen(3050,() => {
  debug("服务器运行在3050端口");
})