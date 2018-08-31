const express = require('express');
const path = require('path');
const server = express();

const actionRoutes = require('./routes/actionRoutes.js');
const projectRoutes = require('./routes/projectRoutes.js');

server.use('/actions/', actionRoutes)
server.use('/projects/', projectRoutes)



server.listen(7000, () => console.log('\n == server running on 7k == \n'))
