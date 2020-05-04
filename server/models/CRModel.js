const connection = require('../dbconnectio');
const CONFIG = require('../config');

const CR = function(cr) {
  this.user_id = cr.user_id;
  this.raised_date = cr.raised_date;
  this.circuit_id = cr.circuit_id;
  this.cr_ips = cr.cr_ips;
  this.cr_sandbox = cr.cr_sandbox;
  this.cr_traffic = cr.cr_traffic;
  this.cr_spam = cr.spam;
  this.cr_json = cr.cr_json;
  this.status_id = cr.status_id;
  this.last_updated = new Date();
  this.last_updated_by = cr.last_updated_by;
  this.fileDetails = cr.fileDetails;
  this.portDetails = cr.portDetails;
  this.urlDetails = cr.urlDetails;
  this.applicationDetails = cr.applicationDetails;
};
CR.getCRs = function(dataP, result) {
  const proc = `CALL get_Cr_details(${dataP[0]},${dataP[1]},${dataP[2]},${dataP[3]})`;
  connection.query(proc, function(err, res) {
    if (err) {
      result(null, { error: true, data: err });
    } else {
      result(null, { error: false, data: res[0] });
    }
  });
};

CR.createCR = function(crParams, urlParams, portParams, applParams, fileParams, result) {
  connection.getConnection(function(err, conn) {
    conn.beginTransaction(function(err) {
      if (err) {
        // Transaction Error (Rollback and release connection)
        conn.rollback(function() {
          conn.release();
          // Failure
          result(null, { error: true, data: err });
        });
      } else {
        conn.query(`Insert into ${CONFIG.TABLE.CR_SUBMISSION} set ? `, crParams, function(err, results) {
          if (err) {
            // Query Error (Rollback and release connection)
            conn.rollback(function() {
              conn.release();
              // Failure
              result(null, { error: true, data: err });
            });
          } else {
            conn.commit(function(err) {
              if (err) {
                conn.rollback(function() {
                  conn.release();
                  // Failure
                  result(null, { error: true, data: err });
                });
              } else {
                const crId = results.insertId;
                // start query for url details
                if (urlParams !== null && urlParams.length >= 0) {
                  urlParams.forEach(url => {
                    const uParams = { cr_submission_id: crId, cr_url_name: url };
                    conn.query(`Insert into ${CONFIG.TABLE.CR_URL_DETAILS} set ? `, uParams, function(err, result1) {
                      if (err) {
                        // Query Error (Rollback and release connection)
                        conn.rollback(function() {
                          conn.release();
                          // Failure
                          result(null, { error: true, data: err });
                        });
                      } else {
                        conn.commit(function(err) {
                          if (err) {
                            conn.rollback(function() {
                              conn.release();
                              // Failure
                              result(null, { error: true, data: err });
                            });
                          }
                        });
                      }
                    });
                  });
                }
                // conn.release();

                // end query for url details
                // start query for port details
                if (portParams !== null && portParams.length >= 0) {
                  portParams.forEach(portD => {
                    const pParams = {
                      cr_port_type: portD.type,
                      cr_port_no: portD.port,
                      cr_port_status: portD.status,
                      cr_submission_id: crId
                    };
                    conn.query(`Insert into ${CONFIG.TABLE.CR_PORT_DETAILS} set ? `, pParams, function(err, result2) {
                      if (err) {
                        // Query Error (Rollback and release connection)
                        conn.rollback(function() {
                          conn.release();
                          // Failure
                          result(null, { error: true, data: err });
                        });
                      } else {
                        conn.commit(function(err) {
                          if (err) {
                            conn.rollback(function() {
                              conn.release();
                              // Failure
                              result(null, { error: true, data: err });
                            });
                          }
                        });
                      }
                    });
                  });
                }
                // conn.release();

                // end query for port details
                // start query for application details
                if (applParams !== null && applParams.length >= 0) {
                  applParams.forEach(application => {
                    const webParams = {
                      cr_submission_id: crId,
                      cr_web_type: application.type,
                      cr_web_category: application.category,
                      cr_web_status: application.status
                    };
                    conn.query(`Insert into ${CONFIG.TABLE.CR_WEB_DETAILS} set ? `, webParams, function(err, result3) {
                      if (err) {
                        // Query Error (Rollback and release connection)
                        conn.rollback(function() {
                          conn.release();
                          // Failure
                          result(null, { error: true, data: err });
                        });
                      } else {
                        conn.commit(function(err) {
                          if (err) {
                            conn.rollback(function() {
                              conn.release();
                              // Failure
                              result(null, { error: true, data: err });
                            });
                          }
                        });
                      }
                    });
                  });
                }

                // end query for application details
                // start query for file details
                if (fileParams !== null && fileParams.length >= 0) {
                  fileParams.forEach(fileP => {
                    const filePara = {
                      cr_submission_id: crId,
                      cr_file_type: fileP.type,
                      cr_file_status: fileP.status
                    };
                    conn.query(`Insert into ${CONFIG.TABLE.CR_FILE_DETAILS} set ? `, filePara, function(err, result4) {
                      if (err) {
                        // Query Error (Rollback and release connection)
                        conn.rollback(function() {
                          conn.release();
                          // Failure
                          result(null, { error: true, data: err });
                        });
                      } else {
                        conn.commit(function(err) {
                          if (err) {
                            conn.rollback(function() {
                              conn.release();
                              // Failure
                              result(null, { error: true, data: err });
                            });
                          }
                        });
                      }
                    });
                  });
                }

                // end query for file details
                conn.release();
                result(null, { error: false, data: results });
                // Success
              }
            });
          }
        });
      }
    });
  });
};
module.exports = CR;
