import React from 'react';
import './index.scss';
// import Logo from 'assets/images/logo.svg';

function Home() {
  return (
    <div>
      {process.env.REACT_APP_BASE_URL}
      <img src="./assets/images/logo.png" alt="logo" />
    </div>
  );
}

export default Home;
