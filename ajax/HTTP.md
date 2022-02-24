## 请求报文
重点是格式与参数
```
行      POST /s?ie=utf-8  HTTP/1.1
头      Host: atguigu.com
        Cookie:name=guigu
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行
体      username=admin&password=admin
```
## 响应报文
```
行      HTTP /1.1  200  OK
头      Content-type: text/html;charest=utf-8
        Content-length: 2048
        Content-encoding: gzip
空行
体      <html>
        <head></head>
        <body>
            <h1>老李</h1>
        </body>
        </html>
```