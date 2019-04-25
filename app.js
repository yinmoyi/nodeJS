//require
// var stuff = require("./stuff");
// console.log(stuff.counter([1, 2, 1]));
// console.log(stuff.adder(2.4, stuff.pi));

// // 1. 引入事件模块
// var events = require("events");

// // 2. 创建 EventEmitter对象
// const myEmitter = new events.EventEmitter();

// // 注册事件
// myEmitter.on("myFun", function(a) {
//   console.log("注册事件成功" + a);
// });

// // 触发事件
// myEmitter.emit("myFun", 255);

// var fs = require("fs");
// 同步读取文件
// var text = fs.readFileSync("read.txt", "utf-8");

// 异步读取文件
// fs.readFile("./read.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log(1);

// 异步写入文件
// fs.readFile("./read.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   fs.writeFile("./write.txt", data);
//   fs.unlink("./read.txt", err => {
//     if (err) throw err;
//     console.log("文件删除成功");
//   });
// });

// http创建服务器
// const http = require("http");
// var fs = require("fs");
// let server = http.createServer((req, res) => {
//   if (req.url !== "/favicon.ico") {
//     res.writeHead(200, { "Content-type": "text/html" });
//     fs.createReadStream(__dirname + "/index.html", "utf-8").pipe(res);
//   }
// });
// server.listen(8888, "127.0.0.1");

// 引入express
var express = require("express");

// 实例化express对象
var app = express();

// 配置视图引擎
app.set("view engine", "ejs");

// 让服务器识别外部样式表
app.use("/assets", express.static("assets"));

// 通过对象调用方法

// app.get("/", (req, res) => {
//   console.log(req.url);
//   res.sendFile(__dirname + "/index.html");
// });

// 首页
app.get("/", (req, res) => {
  res.render("index");
});

// 联系我们
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/contact/:id", (req, res) => {
  var data = [{ name: "xiaohua", age: 23 }, { name: "leisi", age: 24 }];
  res.render("demo", { websiteName: req.params.id, data });
});

// 监听端口号
app.listen(8888);
