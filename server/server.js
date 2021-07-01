'use strict';

const express = require('express');
const cookieParser = require('cookie-parser')

// константы
const port = 8080;
const host = '0.0.0.0';

// приложение
const app = express();
app.use(cookieParser())
app.get('/', (req, res) => {
    console.log(req.cookies, 'console 1')
    res.json({cookies: req.cookies, text: 'Hello World'});
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);