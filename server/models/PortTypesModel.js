const connection = require('../dbconnectio');
const CONFIG = require('../config');

const PortTypes = function(portTypes) {
  this.port_id = portTypes.port_id;
  this.port_type = portTypes.port_type;
};
PortTypes.getAll = function(result) {
  connection.query(`Select * from ${CONFIG.TABLE.PORT_TYPES}`, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};
PortTypes.getById = function(fid, result) {
  connection.query(`Select * from ${CONFIG.TABLE.PORT_TYPES} where port_id=?`, fid, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};
module.exports = PortTypes;
