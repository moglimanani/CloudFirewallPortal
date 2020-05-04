import React from 'react';
import './home.scss';
import { Row, Col } from 'antd';
import CustomBreadcrumb from '../breadcrumb';
// import Logo from 'assets/images/logo.svg';

function Home() {
  return (
    <Row className="page homePage">
      <Col span={24}>
        <Row>
          <Col span={24}>
            <CustomBreadcrumb breadLinks={['Home']} />
          </Col>
        </Row>
        <Row className="map">
          <Col span={12} className="column">
            <div className="blocks">sdfs</div>
          </Col>
          <Col span={12} className="column">
            <div className="blocks">sdfs</div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Home;
