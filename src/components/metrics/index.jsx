import React, { useState } from 'react';
import { Input, Layout, Row, Col } from 'antd';
import { CloseCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import LeftPanel from './leftPanel';
import DayFilter from '../dayFilter';
import CustomBreadcrumb from '../breadcrumb';

import './metrics.scss';
// import Logo from 'assets/images/logo.svg';

function Metrics() {
  const [menuFilterOpen, setMenuFilter] = useState(true);
  const leftPanelClass = menuFilterOpen ? 'leftPanel' : 'hide';
  return (
    <Row className="page metricsPage">
      <Col span={4} className={leftPanelClass}>
        <LeftPanel />
      </Col>
      <Col span={menuFilterOpen ? 20 : 24} className="rightPanel">
        <Row>
          <Col span={24}>
            <h2 className="center">Circuit ID: CX2948</h2>
            <CustomBreadcrumb breadLinks={['Firewall Metrics']} />
            {/* <h2>Firewall Metrics</h2> */}
            <DayFilter />
          </Col>
        </Row>
        <Row className="map">
          <Col span={24} className="column">
            <div className="blocks"></div>
          </Col>
        </Row>
      </Col>
      <div className="filterMenus">
        {menuFilterOpen && (
          <div
            className="hideFilter"
            role="button"
            onClick={() => setMenuFilter(false)}
            tabIndex={0}
            onKeyDown={() => {
              setMenuFilter(false);
            }}
          >
            <CloseCircleOutlined title="Hide Filter" />
          </div>
        )}
        {!menuFilterOpen && (
          <div
            role="button"
            className="ShowFilter"
            onClick={() => setMenuFilter(true)}
            tabIndex={-1}
            onKeyDown={() => {
              setMenuFilter(false);
            }}
          >
            <RightCircleOutlined title="Open Filter" />
          </div>
        )}
      </div>
    </Row>
  );
}

export default Metrics;
