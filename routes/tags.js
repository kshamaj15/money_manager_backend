const express = require('express');

const { addTag, getTag } = require('../controllers/tags');

const tag = express.Router();

tag.post('/add', addTag);
tag.get('/', getTag);
tag.get('/:type', getTag);

module.exports = tag;
