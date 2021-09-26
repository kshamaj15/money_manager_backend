const express = require('express');

const { getAllIncome, addIncome, updateIncome, deleteIncome } = require('../controllers/income');

const income = express.Router();

income.get('/', getAllIncome);
income.post('/', addIncome);
income.delete('/delete/:id', deleteIncome);
income.patch('/:id', updateIncome);

module.exports = income;
