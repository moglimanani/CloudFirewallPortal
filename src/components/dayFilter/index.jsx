import React, { useState } from 'react';
import { Menu } from 'antd';
import { CalendarOutlined, WifiOutlined } from '@ant-design/icons';
import './dayFilter.scss';

function DayFilter() {
  const [currentFilter, setCurrentFilter] = useState('1');
  const handleClick = e => setCurrentFilter(e.key);
  return (
    <Menu onClick={e => handleClick(e)} selectedKeys={[currentFilter]} mode="horizontal" className="dayFilter">
      <Menu.Item key="0">
        <WifiOutlined />
      </Menu.Item>
      <Menu.Item key="1">
        <CalendarOutlined />
        Day 1
      </Menu.Item>
      <Menu.Item key="2">
        <CalendarOutlined />
        Days 2
      </Menu.Item>

      <Menu.Item key="3">
        <CalendarOutlined />
        Days 3
      </Menu.Item>
      <Menu.Item key="4">
        <CalendarOutlined />
        Days 4
      </Menu.Item>
      <Menu.Item key="5">
        <CalendarOutlined />
        Days 5
      </Menu.Item>
      <Menu.Item key="6">
        <CalendarOutlined />
        Days 6
      </Menu.Item>
      <Menu.Item key="7">
        <CalendarOutlined />
        Days 7
      </Menu.Item>
    </Menu>
  );
}

export default DayFilter;
