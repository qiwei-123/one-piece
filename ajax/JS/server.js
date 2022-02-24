// 1.引入express
const express = require('express');
// 2.创建应用对象
const app = express();
// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装

app.get('/server', (request, response) => {
    // 设置一个响应头(Response Headers) 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应
    response.send('您好,尊贵的奥迪rs7车主(get)');
});
// all可以接受任意类型的请求 app.all();
app.post('/json-server', (request, response) => {
    // 设置一个响应头(Response Headers) 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('您好,尊贵的奥迪rs7车主(post)');
});
// 针对IE缓存
app.all('/ie', (request, response) => {
    // 设置一个响应头(Response Headers) 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应
    response.send('IE');
});
// 延时响应
app.all('/delay', (request, response) => {
    // 设置一个响应头(Response Headers) 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置延时响应
    setTimeout(() => {
        response.send('网络请求超时,请刷新重试');

    }, 3000);
});
// jQuery
app.post('/jquery-server', (request, response) => {
    // 设置一个响应头(Response Headers) 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('jQuery server');
});

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已启动, 8000   端口监听中......');
});


