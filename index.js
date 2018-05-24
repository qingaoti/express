const express = require('express');
const app = express();

app.use(express.static('dist'));

const server = app.listen(8081, function () {
    console.log("应用实例，访问地址为 http://127.0.0.1:8081")
});