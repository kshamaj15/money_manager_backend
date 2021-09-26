const express = require('express');

const income = express.Router();

const getAllIncome = (req, res) => {
    console.log('Welcome');
    res.send('dssd')
}

income.get('/', getAllIncome);

module.exports = income;
