const connection = require('../dbconnectio');
const CONFIG = require('../config');

const Users = function(users) {
  this.user_id = users.user_id;
  this.email_id = users.email_id;
  this.is_active = users.is_active;
};
Users.getAll = function(result) {
  connection.query(`Select * from ${CONFIG.TABLE.USERS}`, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};
Users.getById = function(fid, result) {
  connection.query(`Select * from ${CONFIG.TABLE.USERS} where user_id=?`, fid, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};
module.exports = Users;
