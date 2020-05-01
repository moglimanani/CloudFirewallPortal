import React from 'react';
import { Row, Col, Input, Divider, Button, InputNumber } from 'antd';
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import CustomDropDown from '../customDropdown';
import { updateCircuitId, updateCurrentPortDetails, increaseTotalRows } from '../../actions/createCR';
import './form.scss';

const createRow = (item, i, portStatusOptions, portOutgoingOptions, updatePortDetailsEvent, deletePortDetailsEvent) => {
  const { type, port, status } = item;
  return (
    <Row className="row contents" key={i}>
      <Col span="7">
        <CustomDropDown
          customClassName="customDropdown"
          selectedValue={type}
          name={`portType${i}`}
          options={portOutgoingOptions}
          customOnChangeEvent={({ value }) => updatePortDetailsEvent({ data: { type: parseInt(value) }, id: i })}
        />{' '}
      </Col>
      <Col span="7">
        <InputNumber
          placeholder="Enter Port"
          size="large"
          className="textbox"
          type="number"
          max={9999}
          value={port}
          onChange={value => updatePortDetailsEvent({ data: { port: parseInt(value) }, id: i })}
        />
      </Col>
      <Col span="7">
        <CustomDropDown
          customClassName="customDropdown"
          selectedValue={status}
          name={`portStatus${i}`}
          options={portStatusOptions}
          customOnChangeEvent={({ value }) => updatePortDetailsEvent({ data: { status: parseInt(value) }, id: i })}
        />{' '}
      </Col>
      <Col span={3}>
        {' '}
        <Button
          type="primary"
          icon={<DeleteOutlined />}
          className="filterButton deleteButton"
          onClick={() => deletePortDetailsEvent(i)}
        >
          {' '}
          Delete
        </Button>
        {/* <Button
        type="primary"
        icon={<PlusCircleOutlined />}
        className="filterButton"
        disabled={portDetailButtonDisable}
        onClick={() => addPortDetails()}
      >
        Add New{' '}
      </Button> */}
      </Col>
    </Row>
  );
};

function PortDetails(props) {
  const { portDetails, portStatusOptions, portOutgoingOptions, updatePortDetailsEvent, deletePortDetailsEvent } = props;
  const data = portDetails.map((items, i) =>
    createRow(items, i, portStatusOptions, portOutgoingOptions, updatePortDetailsEvent, deletePortDetailsEvent)
  );

  return <>{data}</>;
}

export default PortDetails;
