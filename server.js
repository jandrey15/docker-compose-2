'use strict';

const express = require('express');
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/test');
// mongoose.connect('mongodb://root:123456@dbmongo:27017/prueba', { auth: { authdb: 'admin' } });

/*
Hay que crear un user para la base de datos que se quiere usar.
  use prueba;
  db.createUser(
     {
       user: "root",
       pwd: "123456",
       roles: [ "readWrite", "dbAdmin" ]
     }
  )
*/

mongoose.connect("mongodb://dbmongo:27017/prueba", {
    user: "root",
    pass: "123456",
});

// Constants
const PORT = 8080;
const HOST = '192.168.99.100';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world - John Serrano\n');
});

app.get('/hola-mundo', (req, res) => {
  res.send('Hello world :D \n');
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.listen(PORT);
  console.log(`Running on http://${HOST}:${PORT} y connect a la database`);
});
