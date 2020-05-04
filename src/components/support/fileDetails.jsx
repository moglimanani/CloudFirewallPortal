import React from 'react';
import { Row, Col, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import CustomDropDown from '../customDropdown';

const createRow = (item, i, portStatusOptions, fileOptions, updateFileDetailsHandler, deleteFileDetailsHandler) => {
  const { type, status } = item;
  return (
    <Row className="row contents" key={i}>
      <Col span="1" />
      <Col span="10">
        <CustomDropDown
          customClassName="customDropdown"
          selectedValue={type}
          name={`fileType${i}`}
          options={fileOptions}
          customOnChangeEvent={({ value }) => updateFileDetailsHandler({ id: i, data: { type: parseInt(value) } })}
        />{' '}
      </Col>

      <Col span="10">
        <CustomDropDown
          customClassName="customDropdown"
          selectedValue={status}
          name={`fileStatus${i}`}
          options={portStatusOptions}
          customOnChangeEvent={({ value }) => updateFileDetailsHandler({ id: i, data: { status: parseInt(value) } })}
        />{' '}
      </Col>
      <Col span={3}>
        {' '}
        <Button
          type="primary"
          icon={<DeleteOutlined />}
          className="filterButton deleteButton"
          onClick={() => deleteFileDetailsHandler(i)}
        >
          {' '}
          Delete
        </Button>
      </Col>
    </Row>
  );
};

function FileDetails(props) {
  const { fileDetails, portStatusOptions, fileOptions, updateFileDetailsHandler, deleteFileDetailsHandler } = props;
  const data = fileDetails.map((items, i) =>
    createRow(items, i, portStatusOptions, fileOptions, updateFileDetailsHandler, deleteFileDetailsHandler)
  );

  return <>{data}</>;
}

export default FileDetails;
