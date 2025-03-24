const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./login_menu.db');

const search = (username, password, callback) => {
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  
    db.get(query, [username, password], (err, row) => {
      if (err) {
        callback(false);
      } else if (row) {
        callback(true);
      } else {
        callback(false);
      }
    });
  };

  module.exports = { search };