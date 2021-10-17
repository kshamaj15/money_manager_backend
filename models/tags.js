const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TagSchema = new Schema({
    name: { type: String, required: true, unique: true },
    type: { type: String, required: true },
})

module.exports = mongoose.model('Tags', TagSchema);
