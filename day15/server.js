require('./m_db');
const express = require('express');
const app = express();
const route = require('./todo');
const hostname = '127.0.0.1';
const port = 2020;
app.use(express.json());
app.use('/list',route);

app.listen(port, hostname,() => {
    console.log(`running on server http://${hostname}:${port}`)
})