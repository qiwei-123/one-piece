const express = require('express');

const app = express();

app.get('/get-server', (request, response) => {

    response.setHeader('Access-Control-Allow-Origin', '*');

    response.send('发送请求成功');
});
app.post('/post-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('发送请求成功');


}); app.all('all-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.send('发送请求成功');

});
app.listen(8000,() => {
    console.log('端口启用成功 8000 正在监听......');
});