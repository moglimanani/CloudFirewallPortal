import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import './breadcrumb.scss';

function CustomBreadcrumb({ breadLinks }) {
  //   const [currentFilter, setCurrentFilter] = useState('1');
  //   const handleClick = e => setCurrentFilter(e.key);
  const bread = breadLinks.map((item, index) => <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>);
  return <Breadcrumb separator=">>">{bread}</Breadcrumb>;
}

export default CustomBreadcrumb;
