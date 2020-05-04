const connection = require('../dbconnectio');
const CONFIG = require('../config');

const WebCategory = function(webCategory) {
  this.web_cat_id = webCategory.web_cat_id;
  this.web_type = webCategory.web_type;
  this.web_category = webCategory.web_category;
};
WebCategory.getAll = function(result) {
  connection.query(`Select * from ${CONFIG.TABLE.WEB_CATEGORY}`, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};

WebCategory.getByFilter = function(filterByData = {}, result) {
  if (filterByData === null || !filterByData || Object.keys(filterByData).length === 0) {
    result(null, { error: true, data: { sqlMessage: 'Parameter Required' } });
    return;
  }
  const filterKeys = Object.keys(filterByData);
  const attrCatAr = filterKeys.map(item => `${item}=?`);
  const attrCat = attrCatAr.join(' AND ');
  const attrCatValues = Object.values(filterByData);

  connection.query(`Select * from ${CONFIG.TABLE.WEB_CATEGORY} where ${attrCat}`, attrCatValues, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res });
    }
  });
};
module.exports = WebCategory;
