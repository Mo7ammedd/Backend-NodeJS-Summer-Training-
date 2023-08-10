const mongoose = require('mongoose');
const listSchema = require("./schema");
const listModel = mongoose.model('TODO', listSchema);

module.exports = listModel;