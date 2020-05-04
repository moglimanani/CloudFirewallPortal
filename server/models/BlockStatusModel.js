const connection = require('../dbconnectio');
const CONFIG = require('../config');

const BlockStatus = function(blockstatus) {
  this.block_id = blockstatus.block_id;
  this.block_status = blockstatus.block_status;
};
BlockStatus.getAll = function(result) {
  connection.query(`Select * from ${CONFIG.TABLE.BLOCK_STATUS}`, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};
BlockStatus.getById = function(bid, result) {
  connection.query(`Select * from ${CONFIG.TABLE.BLOCK_STATUS} where block_id=?`, bid, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { erro: false, data: res });
    }
  });
};
module.exports = BlockStatus;
