const connection = require('../dbconnectio');
const CONFIG = require('../config');

const FileTypes = function(fileTypes) {
  this.file_id = fileTypes.file_id;
  this.file_type = fileTypes.file_type;
};
FileTypes.getAll = function(result) {
  connection.query(`Select * from ${CONFIG.TABLE.FILE_TYPES}`, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};
FileTypes.getById = function(fid, result) {
  connection.query(`Select * from ${CONFIG.TABLE.FILE_TYPES} where file_id=?`, fid, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};
module.exports = FileTypes;
