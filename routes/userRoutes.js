const express = require('express')
const user = express.Router()

const mysql = require('mysql2');
const keys = require('../config/keys');
const createUserTable = require('../middlewares/createUserTable');
const userModel = require('../models/userModel');

user.post('/', createUserTable, (req, res) => {
  const connection = mysql.createConnection({
    host: keys.host,
    user: keys.user,
    database: keys.database,
    password: keys.password
  });

  const userModelKeys = Object.keys(userModel);

  //do some logic if necessary

  //checks the keys to be the same as it's been described in a model
  const dataKeys = Object.keys(req.body).filter(key => userModelKeys.includes(key));
  const dataValues = dataKeys.map((key) => `'${req.body[key] || null}'`);

  const sql = `INSERT INTO users(${dataKeys.join(', ')}) VALUES(${dataValues.join(', ')})`;
  
  connection.query(sql, function(err, results) {
    if(err) {
      console.log(err)
    };

    console.log(results);
  });
  
  connection.end();
});

module.exports = user;