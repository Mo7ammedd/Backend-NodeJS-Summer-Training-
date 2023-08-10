require('./m_db');
const express = require('express');
const app = express();
const route = require('./R_todo');

app.use(express.json());
app.use('/list',route);

app.listen(3000, () => {
    console.log(" connect successfully");
})