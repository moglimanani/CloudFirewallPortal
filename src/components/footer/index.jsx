import React from 'react';
import { Layout } from 'antd';
import './footer.scss';

const { Footer } = Layout;
// import Logo from 'assets/images/logo.svg';

function CustomFooter() {
  return <Footer style={{ textAlign: 'center' }}>Maxis Business ©2020</Footer>;
}

export default CustomFooter;
