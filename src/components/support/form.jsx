import React from 'react';
import { Row, Col, Input, Divider, Button } from 'antd';
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import Select from 'react-select';
import './form.scss';

function CRForm() {
  const circuitIds = [
    { value: '1', label: 'CX1234' },
    { value: '2', label: 'CX1235' },
    { value: '3', label: 'CX1236' },
    { value: '4', label: 'CX1237' }
  ];
  const portOutgoingOptions = [{ value: '0', label: 'Incoming' }, { value: '1', label: 'Outgoing' }];
  const portStatusOptions = [{ value: '0', label: 'Blocked' }, { value: '1', label: 'Allowed' }];
  const webAppOptions = [{ value: '0', label: 'Web' }, { value: '1', label: 'Application' }];
  const hackOptions = [{ value: '0', label: 'Hacking' }];
  const fileOptions = [{ value: '0', label: 'mp3' }, { value: '1', label: 'wav' }];

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
                      <Select
                        className="customDropdown circtuitDrop"
                        defaultValue={circuitIds[0]}
                        isClearable={false}
                        isSearchable={false}
                        name="filterStatus"
                        options={circuitIds}
                      />
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
              <Row className="row contents">
                <Col span="7">
                  <Select
                    className="customDropdown"
                    defaultValue={null}
                    isClearable={false}
                    isSearchable={false}
                    name="filterMonth"
                    options={portOutgoingOptions}
                  />{' '}
                </Col>
                <Col span="7">
                  <Input placeholder="Enter Port" className="textbox" />
                </Col>
                <Col span="7">
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
              <Row className="row contents">
                <Col span="7">
                  <Select
                    className="customDropdown"
                    defaultValue={null}
                    isClearable={false}
                    isSearchable={false}
                    name="webApllication"
                    options={webAppOptions}
                  />{' '}
                </Col>
                <Col span="7">
                  <Select
                    className="customDropdown"
                    defaultValue={null}
                    isClearable={false}
                    isSearchable={false}
                    name="hacking"
                    options={hackOptions}
                  />{' '}
                </Col>
                <Col span="7">
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
              <Row className="row">
                <Col span={24}>
                  <Row>
                    <Col span={9} className="textRight">
                      <label htmlFor="circuit id">URL</label>
                      <span className="collon">:</span>
                    </Col>
                    <Col span={12}>
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
