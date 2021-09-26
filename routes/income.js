const express = require('express');

const { getAllIncome, addIncome } = require('../controllers/income');

const income = express.Router();

// income.get('/', getAllIncome);
income.post('/add', addIncome);

module.exports = income;
