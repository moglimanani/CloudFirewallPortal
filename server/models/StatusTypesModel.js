const connection = require('../dbconnectio');
const CONFIG = require('../config');

const StatusTypes = function(statusTypes) {
  this.status_id = statusTypes.status_id;
  this.status = statusTypes.status;
};
StatusTypes.getAll = function(result) {
  connection.query(`Select * from ${CONFIG.TABLE.STATUS_TYPES}`, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};
StatusTypes.getById = function(fid, result) {
  connection.query(`Select * from ${CONFIG.TABLE.STATUS_TYPES} where port_id=?`, fid, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};
module.exports = StatusTypes;
