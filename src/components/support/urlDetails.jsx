import React from 'react';
import { Row, Col, Input, Divider, Button, InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { isUrlValid } from '../../helper';

const createRow = (item, i, updateURLDetailsHandler, deleteUrlDetailsHandler) => {
  const errorClassName = isUrlValid(item) ? 'textbox' : 'textbox error';
  return (
    <Row className="row" key={i}>
      <Col span={24}>
        <Row>
          <Col span={3} className="textRight">
            <label htmlFor="circuit id">URL</label>
            <span className="collon">:</span>
          </Col>
          <Col span={18}>
            <Input
              placeholder="Enter URL"
              className={errorClassName}
              onChange={e => {
                updateURLDetailsHandler({ id: i, data: e.target.value });
              }}
              value={item}
            />
          </Col>
          <Col span={3}>
            {' '}
            <Button
              type="primary"
              icon={<DeleteOutlined />}
              className="filterButton deleteButton"
              onClick={() => deleteUrlDetailsHandler({ id: i })}
            >
              {' '}
              Delete
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

function UrlDetails(props) {
  const { updateURLDetailsHandler, deleteUrlDetailsHandler, urlDetails } = props;
  const data = urlDetails.map((items, i) => createRow(items, i, updateURLDetailsHandler, deleteUrlDetailsHandler));

  return <>{data}</>;
}

export default UrlDetails;
