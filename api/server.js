const express = require('express');
const helmet = require('helmet');

const db = require('../api/recipes/recipes-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', db);

module.exports = server;