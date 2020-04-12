const mysql = require('mysql');
const itemqueries = require('./queries/items.queries');
const authqueries = require('./queries/auth.queries');
const userqueries = require('./queries/user.queries');

// Get the Host from Environment or use default
const host = process.env.DB_HOST || 'localhost';

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || 'root';

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || 'password';

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || 'projecthunt';

// Create the connection with required details
const con = mysql.createConnection({
  host,
  user,
  password,
  database
});

// Connect to the database.
con.connect(function(err) {
  if (err) throw err;
  console.log('Connected!');

  con.query(itemqueries.CREATE_ITEMS_TABLE, function(err, result) {
    if (err) throw err;
    console.log('Table created or exists already!');
});
con.query(authqueries.CREATE_USERS_TABLE, function(err, result){
  if(err) throw err; 
  console.log('Table users created');
});
});

module.exports = con;