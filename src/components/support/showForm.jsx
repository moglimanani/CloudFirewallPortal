import React from 'react';
import { Row, Col, Input, Divider, Button, InputNumber } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

import CustomDropDown from '../customDropdown';

import './form.scss';

function ShowCRForm(props) {
  const CR = props.crs;
  const {
    selectedCRRowId,
    allCrs,
    circuitIds,
    portOutgoingOptions,
    portStatusOptions,
    webAppOptions,
    webCategory,
    fileOptions
  } = CR;

  const currentCR = allCrs.filter(item => item.cr_submission_id === selectedCRRowId)[0];
  const selectedCR = JSON.parse(currentCR.cr_json);

  const { circuit_id, portDetails } = currentCR;
  // const portArr = JSON.parse(portDetails);

  const selectedCRIDT = circuitIds.filter(item => item.value === parseInt(selectedCR.circuitId));
  const selectedCRID = selectedCRIDT.length > 0 ? selectedCRIDT[0].label : '';

  const showPortDetails = selectedCR.portDetails && selectedCR.portDetails != null && selectedCR.portDetails.length > 0;
  let PortDetails = [];
  if (showPortDetails) {
    PortDetails = selectedCR.portDetails.map((item, i) => {
      const pTypeArr = portOutgoingOptions.filter(ptype => ptype.value === parseInt(item.type));
      const type = pTypeArr.length > 0 ? pTypeArr[0].label : '';
      const pStatusArr = portStatusOptions.filter(pstatus => pstatus.value === parseInt(item.status));
      const status = pStatusArr.length > 0 ? pStatusArr[0].label : '';

      return (
        <Row className="row contents" key={i}>
          <Col span="8">
            <span className="shownText">{type}</span>
          </Col>
          <Col span="8">
            <span className="shownText">{item.port}</span>
          </Col>
          <Col span="8">
            <span className="shownText">{status}</span>
          </Col>
        </Row>
      );
    });
  }

  const showApplicationDetails =
    selectedCR.applicationDetails && selectedCR.applicationDetails !== null && selectedCR.applicationDetails.length > 0;
  let ApplicationDetails = [];
  if (showApplicationDetails) {
    ApplicationDetails = selectedCR.applicationDetails.map((item, i) => {
      const sTypeArr = webAppOptions.filter(wtype => wtype.value === parseInt(item.type));
      const type = sTypeArr.length > 0 ? sTypeArr[0].label : '';
      const sStatusArr = portStatusOptions.filter(pstatus => pstatus.value === parseInt(item.status));
      const status = sStatusArr.length > 0 ? sStatusArr[0].label : '';
      const sCatArr = webCategory.filter(wctype => wctype.value === parseInt(item.category));
      const category = sCatArr.length > 0 ? sCatArr[0].label : '';
      return (
        <Row className="row contents" key={i}>
          <Col span="8">
            <span className="shownText">{type}</span>
          </Col>
          <Col span="8">
            <span className="shownText">{category}</span>
          </Col>
          <Col span="8">
            <span className="shownText">{status}</span>
          </Col>
        </Row>
      );
    });
  }

  const showUrlDetails = selectedCR.urlDetails && selectedCR.urlDetails !== null && selectedCR.urlDetails.length > 0;
  let UrlDetails = [];
  if (showUrlDetails) {
    UrlDetails = selectedCR.urlDetails.map((item, i) => (
      <div className="shownText" key={i}>
        {item}
      </div>
    ));
  }

  const showFileDetails =
    selectedCR.fileDetails && selectedCR.fileDetails !== null && selectedCR.fileDetails.length > 0;
  let FileDetails = [];
  if (showFileDetails) {
    FileDetails = selectedCR.fileDetails.map((item, i) => {
      const fTypeArr = fileOptions.filter(option => item.type === option.value);
      const type = fTypeArr.length > 0 ? fTypeArr[0].label : '';
      const sStatusArr = portStatusOptions.filter(pstatus => pstatus.value === parseInt(item.status));
      const status = sStatusArr.length > 0 ? sStatusArr[0].label : '';

      return (
        <Row className="row contents" key={i}>
          <Col span="12">
            <span className="shownText">{type}</span>
          </Col>

          <Col span="12">
            <span className="shownText">{status}</span>
          </Col>
        </Row>
      );
    });
  }

  const AllowedOptions = {};
  portStatusOptions.forEach(item => (AllowedOptions[item.value] = item.label));
  const Ips = selectedCR.ips && selectedCR.ips !== null && AllowedOptions[selectedCR.ips];
  const Spam = selectedCR.spam && selectedCR.spam !== null && AllowedOptions[selectedCR.spam];
  const Sandbox = selectedCR.sandbox && selectedCR.sandbox !== null && AllowedOptions[selectedCR.sandbox];
  const Shapping = selectedCR.shapping && selectedCR.shapping !== null && AllowedOptions[selectedCR.shapping];

  return (
    <Row className="formBlock showForm">
      <Col span={24}>
        <h3 className="heading">CR Details</h3>
        <form>
          <Row className="block">
            <Col span={24}>
              <Row className="row">
                <Col span={24}>
                  <Row>
                    <Col span={12} className="textRight">
                      <label htmlFor="circuit id">Circuit Id</label>
                      <span className="collon">:</span>
                    </Col>
                    <Col span={12}>
                      <span className="shownText">{selectedCRID}</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
          {showPortDetails && (
            <>
              <Row className="block">
                <Col span={24}>
                  <h3 className="subHead">Customer Port Request</h3>
                  <Row className="row headings">
                    <Col span="8">
                      <label htmlFor="portsDir">Incoming/Outgoing</label>
                    </Col>
                    <Col span="8">
                      <label htmlFor="port">Port</label>
                    </Col>
                    <Col span="8">
                      <label htmlFor="portStatus">Blocked/Allowed</label>
                    </Col>
                  </Row>

                  {PortDetails}
                </Col>
              </Row>
              <Divider />
            </>
          )}
          {showApplicationDetails && (
            <>
              <Row className="block">
                <Col span={24}>
                  <Row className="row headings">
                    <Col span="8">
                      <label htmlFor="portsDir">Web/Application</label>
                    </Col>
                    <Col span="8">
                      <label htmlFor="port">Category</label>
                    </Col>
                    <Col span="8">
                      <label htmlFor="portStatus">Blocked/Allowed</label>
                    </Col>
                  </Row>

                  {ApplicationDetails}
                </Col>
              </Row>
              <Divider />
            </>
          )}
          {showUrlDetails && (
            <>
              <Row className="block">
                <Col span={24}>
                  <Row className="row">
                    <Col span={24}>
                      <Row>
                        <Col span={8} className="textRight">
                          <label htmlFor="circuit id">URL</label>
                          <span className="collon">:</span>
                        </Col>
                        <Col span={16}>{UrlDetails}</Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Divider />
            </>
          )}
          {showFileDetails && (
            <>
              <Row className="block">
                <Col span={24}>
                  <h3 className="subHead">File Blocking</h3>
                  <Row className="row headings">
                    <Col span="12">
                      <label htmlFor="portsDir">File Type</label>
                    </Col>

                    <Col span="12">
                      <label htmlFor="portStatus">Blocked/Allowed</label>
                    </Col>
                  </Row>

                  {FileDetails}
                </Col>
              </Row>
              <Divider />
            </>
          )}
          <Row className="block">
            <Col span={24}>
              <Row className="row headings">
                <Col span="6" className="textRight">
                  <label htmlFor="portsDir">
                    IPS <span className="collon">:</span>
                  </label>
                </Col>
                <Col span="6">
                  <span className="shownText">{Ips}</span>
                </Col>
                <Col span="6" className="textRight">
                  <label htmlFor="portsDir">
                    Sandbox <span className="collon">:</span>
                  </label>
                </Col>
                <Col span="6">
                  <span className="shownText">{Sandbox}</span>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row className="row headings">
                <Col span="6" className="textRight">
                  <label htmlFor="portsDir">
                    Traffic Shapping for web categories <span className="collon">:</span>
                  </label>
                </Col>
                <Col span="6">
                  <span className="shownText">{Shapping}</span>
                </Col>
                <Col span="6" className="textRight">
                  <label htmlFor="portsDir">
                    Spam Protection <span className="collon">:</span>
                  </label>
                </Col>
                <Col span="6">
                  <span className="shownText">{Spam}</span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="block">
            <Col span={24} className="textCenter">
              <Button type="primary" className="filterButton submitButton" onClick={() => props.closeModel()}>
                Close{' '}
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
}

export default ShowCRForm;
