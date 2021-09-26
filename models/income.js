const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
    source: {type: String},
    sourceId: {type: Number, required: true},
    userId: {type: Number, required: true},
    amount: {type: Number, required: true},
    date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Income', incomeSchema);
