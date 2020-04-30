import React from 'react';
import { Input, Layout, Row, Col } from 'antd';
import { SearchOutlined, BellOutlined } from '@ant-design/icons';
import './header.scss';

const { Header } = Layout;
function MainHeader() {
  return (
    <Header className="mainHeader">
      <Row>
        <Col span={12}>
          {/* <Input
            placeholder=""
            size="large"
            className="bigSearch"
            prefix={<SearchOutlined className="site-form-item-icon" />}
          /> */}
        </Col>
        <Col span={12}>
          {' '}
          <h3>
            <BellOutlined /> <span className="userid">user@domain.com</span>
          </h3>
        </Col>
      </Row>
    </Header>
  );
}

export default MainHeader;
