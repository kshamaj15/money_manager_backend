const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TagSchema = new Schema({
    name: { type: String, required: true },
    tagId: { type: Number, required: true },
    type: { type: String, required: true },
})

module.exports = mongoose.model('Tags', TagSchema);
