const connection = require('../dbconnectio');
const CONFIG = require('../config');

const WebTypes = function(webTypes) {
  this.web_id = webTypes.web_id;
  this.web_type = webTypes.web_type;
};
WebTypes.getAll = function(result) {
  connection.query(`Select * from ${CONFIG.TABLE.WEB_TYPES}`, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};
WebTypes.getById = function(fid, result) {
  connection.query(`Select * from ${CONFIG.TABLE.WEB_TYPES} where web_id=?`, fid, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};
module.exports = WebTypes;
