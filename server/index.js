/* eslint-disable no-console */
const express = require('express');
const mongoCont = require('../controller/mongo.js');
const {Price} = require('../DataBase/schema.js');
const mongo = require('../DataBase/mongo');

const app = express();
const PORT = 8020;

app.use(express.json());
app.use('/mortgage/:id', express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});

app.get('*/:id/db', mongoCont.get);

app.post('*/:id/db', mongoCont.post);

app.put('*/:id/db', mongoCont.put);

app.delete('*/:id/db', mongoCont.delete);
