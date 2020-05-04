const CR = require('../models/CRModel');

exports.createCR = function(req, res) {
  const {
    userId,
    circuitId,
    applicationDetails,
    fileDetails,
    ips,
    portDetails,
    sandbox,
    shapping,
    spam,
    urlDetails
  } = req.body;

  const crParams = {
    user_id: userId,
    raised_date: new Date(),
    circuit_id: circuitId,
    cr_ips: ips,
    cr_sandbox: sandbox,
    cr_traffic: shapping,
    cr_json: JSON.stringify(req.body),
    status_id: 1,
    last_updated: new Date(),
    last_updated_by: userId,
    applicationDetails,
    fileDetails,
    portDetails,
    urlDetails,
    cr_spam: spam
  };
  const NewCr = new CR(crParams);

  const submissionParams = {
    user_id: NewCr.user_id,
    raised_date: NewCr.raised_date,
    circuit_id: NewCr.circuit_id,
    cr_ips: NewCr.cr_ips,
    cr_sandbox: NewCr.cr_sandbox,
    cr_traffic: NewCr.cr_traffic,
    cr_json: NewCr.cr_json,
    status_id: NewCr.status_id,
    last_updated: NewCr.last_updated,
    last_updated_by: NewCr.last_updated_by
  };
  const urlParams = NewCr.urlDetails;
  const portParams = NewCr.portDetails;
  const applParams = NewCr.applicationDetails;
  const fileParams = NewCr.fileDetails;

  if (NewCr.user_id === null || typeof NewCr.user_id === 'undefined') {
    res.status(400).send({ error: true, data: { sqlMessage: 'Invalid Params' } });
  } else {
    CR.createCR(submissionParams, urlParams, portParams, applParams, fileParams, function(err, data) {
      if (err) res.send(err);

      res.send(data);
    });
  }
};
exports.getCRs = function(req, res) {
  const uId = req.body.user_id || null;
  if (isNaN(uId)) {
    res.status(400).send({ error: true, data: { sqlMessage: 'Invalid Params' } });
  } else {
    const { month, year, status } = req.body;

    const data = [uId, month, year, status];
    CR.getCRs(data, function(err, crs) {
      if (err) res.send(err);
      res.send(crs);
    });
  }
};
