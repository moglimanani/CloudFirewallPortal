import React, { useState, useEffect } from 'react';
import './home.scss';
import { Row, Col } from 'antd';
import Chart from 'chart.js';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import CustomBreadcrumb from '../breadcrumb';
import CustomChart from './customChart';
// import Logo from 'assets/images/logo.svg';

function Home() {
  const [chartData, setChartData] = useState([]);
  let mounted = true;
  useEffect(() => {
    axios({
      method: 'POST',
      url: 'devices',
      baseURL: 'http://121.121.20.181/chart_api/api/v1/throughput/',
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
      data: {
        devices: ['192.168.193.33', '12.168.123.33', '22.123.46.73'],
        user: 'user@email.com',
        start: '2019-11-01 00:00:00',
        end: '2019-11-02 00:00:00'
      }
    }).then(results => {
      console.log(333, results);
      if (mounted) setChartData([results.data.bytes_received, results.data.bytes_sent]);
    });
    return () => (mounted = false);
  }, []);
  console.log(1212, chartData);

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
            <div className="blocks">{chartData.length > 0 && <CustomChart customChartData={chartData} />}</div>
          </Col>
          <Col span={12} className="column">
            <div className="blocks"></div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Home;
