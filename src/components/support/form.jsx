import React from 'react';
import { Row, Col, Input, Divider, Button, InputNumber } from 'antd';
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import CustomDropDown from '../customDropdown';
import {
  updateCircuitId,
  updateCurrentPortDetails,
  updateCurrentAppDetails,
  resetCurrentAppDetails,
  increaseTotalRows,
  resetCurrentPortDetails,
  addPortDetails,
  deletePortDetails,
  updatePortDetails,
  addAppDetails,
  updateAppDetails,
  deleteAppDetails
} from '../../actions/createCR';
import PortDetails from './portDetails';
import AppDetails from './appDetails';
import './form.scss';

function CRForm() {
  const createCR = useSelector(state => state.createCR);
  const dispatch = useDispatch();
  const {
    circuitId,
    circuitIds,
    portOutgoingOptions,
    portStatusOptions,
    webAppOptions,
    fileOptions,
    currentPortDetails,
    MAXROWS,
    totalRows,
    portDetails,
    currentApplicationDetails,
    webCategory,
    applicationCategory,
    applicationDetails
  } = createCR;
  const portDetailButtonDisable =
    MAXROWS <= totalRows ||
    currentPortDetails.type === null ||
    currentPortDetails.port === null ||
    currentPortDetails.port.length === 0 ||
    currentPortDetails.status === null;
  const appDetailButtonDisable =
    MAXROWS <= totalRows ||
    currentApplicationDetails.type === null ||
    currentApplicationDetails.category === null ||
    currentApplicationDetails.status === null;
  console.log(currentApplicationDetails);
  let currAppCat = [];
  const webAppCatOpt = [webCategory, applicationCategory];
  if (currentApplicationDetails.type !== null) {
    currAppCat = webAppCatOpt[currentApplicationDetails.type];
  }

  const addPortDetailsHandler = () => {
    dispatch(increaseTotalRows());
    dispatch(addPortDetails(currentPortDetails));
    dispatch(resetCurrentPortDetails());
  };

  const addAppDetailsHandler = () => {
    dispatch(increaseTotalRows());
    dispatch(addAppDetails(currentApplicationDetails));
    dispatch(resetCurrentAppDetails());
  };
  const updatePortDetailsHandler = ({ id, data }) => {
    dispatch(updatePortDetails(id, data));
  };
  const deletePortDetailsHandler = id => {
    dispatch(deletePortDetails(id));
  };
  const updateAppDetailsHandler = ({ id, data }) => {
    dispatch(updateAppDetails(id, data));
  };
  const deleteAppDetailsHandler = id => {
    dispatch(deleteAppDetails(id));
  };
  return (
    <Row className="formBlock">
      <Col span={24}>
        <h3 className="heading">Apply for Cr</h3>
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
                      {' '}
                      <CustomDropDown
                        customClassName="customDropdown circtuitDrop"
                        selectedValue={circuitId}
                        name="circuitIds"
                        options={circuitIds}
                        customOnChangeEvent={({ value }) => {
                          dispatch(updateCircuitId(parseInt(value)));
                        }}
                      />{' '}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
          <Row className="block">
            <Col span={24}>
              <h3 className="subHead">Customer Port Request</h3>
              <Row className="row headings">
                <Col span="7">
                  <label htmlFor="portsDir">Incoming/Outgoing</label>
                </Col>
                <Col span="7">
                  <label htmlFor="port">Port</label>
                </Col>
                <Col span="7">
                  <label htmlFor="portStatus">Blocked/Allowed</label>
                </Col>
                <Col span="3" />
              </Row>
              <PortDetails
                portDetails={portDetails}
                deletePortDetailsEvent={id => deletePortDetailsHandler(id)}
                updatePortDetailsEvent={id => updatePortDetailsHandler(id)}
                portOutgoingOptions={portOutgoingOptions}
                portStatusOptions={portStatusOptions}
              />
              <Row className="row contents">
                <Col span="7">
                  <CustomDropDown
                    customClassName="customDropdown"
                    selectedValue={currentPortDetails.type}
                    name="portType"
                    options={portOutgoingOptions}
                    customOnChangeEvent={({ value }) => dispatch(updateCurrentPortDetails({ type: parseInt(value) }))}
                  />{' '}
                </Col>
                <Col span="7">
                  <InputNumber
                    placeholder="Enter Port"
                    size="large"
                    className="textbox"
                    type="number"
                    max={9999}
                    value={currentPortDetails.port}
                    onChange={value => dispatch(updateCurrentPortDetails({ port: parseInt(value) }))}
                  />
                </Col>
                <Col span="7">
                  <CustomDropDown
                    customClassName="customDropdown"
                    selectedValue={currentPortDetails.status}
                    name="portStatus"
                    options={portStatusOptions}
                    customOnChangeEvent={({ value }) => dispatch(updateCurrentPortDetails({ status: parseInt(value) }))}
                  />{' '}
                </Col>
                <Col span={3}>
                  {' '}
                  {/* <Button type="primary" icon={<DeleteOutlined />} className="filterButton deleteButton">
                    {' '}
                    Delete
                  </Button> */}
                  <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    className="filterButton"
                    disabled={portDetailButtonDisable}
                    onClick={() => addPortDetailsHandler()}
                  >
                    Add New{' '}
                  </Button>
                </Col>
              </Row>
              {/* <Row>
                <Col className="buttons" span={24} />
              </Row> */}
            </Col>
          </Row>
          <Divider />
          <Row className="block">
            <Col span={24}>
              <Row className="row headings">
                <Col span="7">
                  <label htmlFor="portsDir">Web/Application</label>
                </Col>
                <Col span="7">
                  <label htmlFor="port">Category</label>
                </Col>
                <Col span="7">
                  <label htmlFor="portStatus">Blocked/Allowed</label>
                </Col>
                <Col span="3" />
              </Row>
              <AppDetails
                applicationDetails={applicationDetails}
                deleteAppDetailsEvent={id => deleteAppDetailsHandler(id)}
                updateAppDetailsEvent={id => updateAppDetailsHandler(id)}
                portStatusOptions={portStatusOptions}
                webAppOptions={webAppOptions}
                webCategory={webCategory}
                applicationCategory={applicationCategory}
              />
              <Row className="row contents">
                <Col span="7">
                  <CustomDropDown
                    customClassName="customDropdown"
                    selectedValue={currentApplicationDetails.type}
                    name="webApllicationType"
                    options={webAppOptions}
                    customOnChangeEvent={({ value }) => dispatch(updateCurrentAppDetails({ type: parseInt(value) }))}
                  />{' '}
                  {/* <Select
                    className="customDropdown"
                    defaultValue={null}
                    isClearable={false}
                    isSearchable={false}
                    name="webApllication"
                    options={webAppOptions}
                  />{' '} */}
                </Col>
                <Col span="7">
                  <CustomDropDown
                    customClassName="customDropdown"
                    selectedValue={currentApplicationDetails.category}
                    name="webApllicationCat"
                    options={currAppCat}
                    customOnChangeEvent={({ value }) =>
                      dispatch(updateCurrentAppDetails({ category: parseInt(value) }))
                    }
                  />{' '}
                  {/* <Select
                    className="customDropdown"
                    defaultValue={null}
                    isClearable={false}
                    isSearchable={false}
                    name="hacking"
                    options={hackOptions}
                  />{' '} */}
                </Col>
                <Col span="7">
                  <CustomDropDown
                    customClassName="customDropdown"
                    selectedValue={currentApplicationDetails.status}
                    name="webApllicationStatus"
                    options={portStatusOptions}
                    customOnChangeEvent={({ value }) => dispatch(updateCurrentAppDetails({ status: parseInt(value) }))}
                  />{' '}
                  {/* <Select
                    className="customDropdown"
                    defaultValue={null}
                    isClearable={false}
                    isSearchable={false}
                    name="filterMonth"
                    options={portStatusOptions}
                  />{' '} */}
                </Col>
                <Col span={3}>
                  {' '}
                  <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    className="filterButton"
                    disabled={appDetailButtonDisable}
                    onClick={() => addAppDetailsHandler()}
                  >
                    Add New{' '}
                  </Button>
                  {/* <Button type="primary" icon={<DeleteOutlined />} className="filterButton deleteButton">
                    {' '}
                    Delete
                  </Button> */}
                </Col>
              </Row>
              <Row>
                <Col className="buttons" span={24} />
              </Row>
            </Col>
          </Row>
          <Divider />
          <Row className="block">
            <Col span={24}>
              <Row className="row">
                <Col span={24}>
                  <Row>
                    <Col span={3} className="textRight">
                      <label htmlFor="circuit id">URL</label>
                      <span className="collon">:</span>
                    </Col>
                    <Col span={18}>
                      <Input placeholder="Enter Port" className="textbox" />
                    </Col>
                    <Col span={3}>
                      {' '}
                      <Button type="primary" icon={<DeleteOutlined />} className="filterButton deleteButton">
                        {' '}
                        Delete
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="buttons" span={24}>
                      <Button type="primary" icon={<PlusCircleOutlined />} className="filterButton">
                        Add New{' '}
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
          <Row className="block">
            <Col span={24}>
              <h3 className="subHead">File Blocking</h3>
              <Row className="row headings">
                <Col span="1" />
                <Col span="10">
                  <label htmlFor="portsDir">File Type</label>
                </Col>

                <Col span="10">
                  <label htmlFor="portStatus">Blocked/Allowed</label>
                </Col>
                <Col span="3" />
              </Row>
              <Row className="row contents">
                <Col span="1" />
                <Col span="10">
                  <Select
                    className="customDropdown"
                    defaultValue={null}
                    isClearable={false}
                    isSearchable={false}
                    name="webApllication"
                    options={fileOptions}
                  />{' '}
                </Col>

                <Col span="10">
                  <Select
                    className="customDropdown"
                    defaultValue={null}
                    isClearable={false}
                    isSearchable={false}
                    name="filterMonth"
                    options={portStatusOptions}
                  />{' '}
                </Col>
                <Col span={3}>
                  {' '}
                  <Button type="primary" icon={<DeleteOutlined />} className="filterButton deleteButton">
                    {' '}
                    Delete
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col className="buttons" span={24}>
                  <Button type="primary" icon={<PlusCircleOutlined />} className="filterButton">
                    Add New{' '}
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
          <Row className="block">
            <Col span={24}>
              <Row className="row headings">
                <Col span="6" className="textRight">
                  <label htmlFor="portsDir">
                    IPS <span className="collon">:</span>
                  </label>
                </Col>
                <Col span="6">
                  <Select
                    className="customDropdown"
                    defaultValue={null}
                    isClearable={false}
                    isSearchable={false}
                    name="filterMonth"
                    options={portStatusOptions}
                  />{' '}
                </Col>
                <Col span="6" className="textRight">
                  <label htmlFor="portsDir">
                    Sandbox <span className="collon">:</span>
                  </label>
                </Col>
                <Col span="6">
                  <Select
                    className="customDropdown"
                    defaultValue={null}
                    isClearable={false}
                    isSearchable={false}
                    name="filterMonth"
                    options={portStatusOptions}
                  />{' '}
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
                  <Select
                    className="customDropdown"
                    defaultValue={null}
                    isClearable={false}
                    isSearchable={false}
                    name="filterMonth"
                    options={portStatusOptions}
                  />{' '}
                </Col>
                <Col span="6" className="textRight">
                  <label htmlFor="portsDir">
                    Spam Protection <span className="collon">:</span>
                  </label>
                </Col>
                <Col span="6">
                  <Select
                    className="customDropdown"
                    defaultValue={null}
                    isClearable={false}
                    isSearchable={false}
                    name="filterMonth"
                    options={portStatusOptions}
                  />{' '}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="block">
            <Col span={24} className="textCenter">
              <Button type="primary" className="filterButton">
                Submit{' '}
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
}

export default CRForm;
