const express = require('express');

const { addTag, getTag, deleteTag } = require('../controllers/tags');

const tag = express.Router();

tag.post('/add', addTag);
tag.get('/', getTag);
tag.get('/:type', getTag);
tag.delete('/:id', deleteTag);

module.exports = tag;
