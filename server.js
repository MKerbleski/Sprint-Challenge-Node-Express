// "Access-Control-Allow-Orgin": true,
const express = require('express');

const path = require('path');

const server = express();

const cors = require('cors'); // solves the local host thing

const morgan = require('morgan');

const actionRoutes = require('./routes/actionRoutes.js');
const projectRoutes = require('./routes/projectRoutes.js');

server.use(express.json());//turns into a json object

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  accessControlAllowOrgin: true,
}

server.use(cors(corsOptions));

server.use('/actions/', actionRoutes);
server.use('/projects/',  projectRoutes);

server.listen(7000, () => console.log('\n == server running on 7k == \n'))
