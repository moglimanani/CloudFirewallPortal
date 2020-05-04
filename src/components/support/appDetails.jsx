import React from 'react';
import { Row, Col, Input, Divider, Button, InputNumber } from 'antd';
import { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import CustomDropDown from '../customDropdown';
import { updateCircuitId, updateCurrentPortDetails, increaseTotalRows } from '../../actions/createCR';
import './form.scss';

const createRow = (
  item,
  i,
  portStatusOptions,
  webAppOptions,
  webCategory,
  applicationCategory,
  updateAppDetailsEvent,
  deleteAppDetailsEvent
) => {
  const { type, category, status } = item;
  // const categoryOptions = type === 0 ? webCategory : applicationCategory;
  const categoryOptions = webCategory.filter(obj => obj.type === type);
  return (
    <Row className="row contents" key={i}>
      <Col span="7">
        <CustomDropDown
          customClassName="customDropdown"
          selectedValue={type}
          name={`webApllicationType${i}`}
          options={webAppOptions}
          customOnChangeEvent={({ value }) => updateAppDetailsEvent({ data: { type: parseInt(value) }, id: i })}
        />{' '}
      </Col>
      <Col span="7">
        <CustomDropDown
          customClassName="customDropdown"
          selectedValue={category}
          name={`webApllicationCat${i}`}
          options={categoryOptions}
          customOnChangeEvent={({ value }) => updateAppDetailsEvent({ data: { category: parseInt(value) }, id: i })}
        />{' '}
      </Col>
      <Col span="7">
        <CustomDropDown
          customClassName="customDropdown"
          selectedValue={status}
          name={`webApllicationStatus${i}`}
          options={portStatusOptions}
          customOnChangeEvent={({ value }) => updateAppDetailsEvent({ data: { status: parseInt(value) }, id: i })}
        />{' '}
      </Col>
      <Col span={3}>
        {' '}
        <Button
          type="primary"
          icon={<DeleteOutlined />}
          className="filterButton deleteButton"
          onClick={() => deleteAppDetailsEvent(i)}
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

function AppDetails(props) {
  const {
    applicationDetails,
    portStatusOptions,
    webAppOptions,
    webCategory,
    applicationCategory,
    updateAppDetailsEvent,
    deleteAppDetailsEvent
  } = props;
  const data = applicationDetails.map((items, i) =>
    createRow(
      items,
      i,
      portStatusOptions,
      webAppOptions,
      webCategory,
      applicationCategory,
      updateAppDetailsEvent,
      deleteAppDetailsEvent
    )
  );

  return <>{data}</>;
}

export default AppDetails;
