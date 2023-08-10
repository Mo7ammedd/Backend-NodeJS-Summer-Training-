
const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    Title: "string",
    Status: "string"
});

module.exports = listSchema;