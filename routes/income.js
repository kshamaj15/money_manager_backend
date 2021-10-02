const express = require('express');

const { getAllIncome, addIncome, updateIncome, deleteIncome } = require('../controllers/income');

const income = express.Router();

income.get('/', getAllIncome);
income.get('/:id', getAllIncome);
income.post('/add', addIncome);
income.delete('/delete/:id', deleteIncome);
income.patch('/update/:id', updateIncome);

module.exports = income;
