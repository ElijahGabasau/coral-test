const mysql = require('mysql2');
const keys = require('../config/keys');
const userModel = require('../models/userModel');

//create table if there is no one already
module.exports = (req, res, next) =>  {
  const connection = mysql.createConnection({
    host: keys.host,
    user: keys.user,
    database: keys.database,
    password: keys.password
  });

  let userFields = [];

  for (let field in userModel) {
    userFields.push(`${field} ${userModel[field]}`)
  }
  
  const sql = `
    create table if not exists users(
      ${userFields.join(`,`)}
    )
  `;
   
  connection.query(sql, function(err, results) {
      if(err) {
        console.log(err);
      }

      connection.end();
      next();
  });
}
   