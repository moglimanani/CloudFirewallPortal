import React, { useState } from 'react';
// import 'antd/dist/antd.css';
import './app.scss';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainHeader from '../header/index';
import Home from '../home';
import Metrics from '../metrics';
import Support from '../support';
import Navigation from '../navigation';
import CustomFooter from '../footer';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navigation />
      <Layout className="site-layout">
        <MainHeader />
        <Content>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/metrics">
              <Metrics />
            </Route>
            <Route path="/support">
              <Support />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
