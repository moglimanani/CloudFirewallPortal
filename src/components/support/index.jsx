import React from 'react';
import { Input, Layout, Row, Col, Card } from 'antd';
import CustomBreadcrumb from '../breadcrumb';
import './support.scss';

function Support() {
  return (
    <Row className="page supportPage">
      <Col span={24}>
        <CustomBreadcrumb breadLinks={['Support & CR', 'CR']} />
        <Row className="CRcard">
          <Col span={24}>
            <Card>
              <div className="title">Apply for CR</div>
              <div className="rating">
                <div className="points">7/10</div>
                <div className="remains">Remaining CR </div>
              </div>
              <div className="buttonbar">
                <span>Apply for CR </span>
              </div>
              <div className="linkbar" />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Support;
