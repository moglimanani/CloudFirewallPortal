import React from 'react';
import './home.scss';
import CustomBreadcrumb from '../breadcrumb';
// import Logo from 'assets/images/logo.svg';

function Home() {
  return (
    <div className="page homePage">
      <CustomBreadcrumb breadLinks={['Home']} />
    </div>
  );
}

export default Home;
