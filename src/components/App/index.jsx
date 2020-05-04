import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import 'antd/dist/antd.css';
import './app.scss';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import useAxios from 'axios-hooks';
import MainHeader from '../header/index';
import Home from '../home';
import Metrics from '../metrics';
import Support from '../support';
import Navigation from '../navigation';
import CustomFooter from '../footer';
import { updateCRField } from '../../actions/createCR';
import { getOptions, getWebCatOptions, getCRS } from '../../helper';

const { Header, Content, Footer } = Layout;

function App() {
  const dispatch = useDispatch();
  getOptions('web_types/', useAxios, ['web_id', 'web_type'], dispatch, 'webAppOptions', updateCRField);
  getOptions('porttypes/', useAxios, ['port_id', 'port_type'], dispatch, 'portOutgoingOptions', updateCRField);
  getOptions('blockstatus/', useAxios, ['block_id', 'block_status'], dispatch, 'portStatusOptions', updateCRField);
  getOptions('filetypes/', useAxios, ['file_id', 'file_type'], dispatch, 'fileOptions', updateCRField);
  getOptions('statustypes/', useAxios, ['status_id', 'status'], dispatch, 'ticketStatusOptions', updateCRField);
  getWebCatOptions(
    'web_category/',
    useAxios,
    ['web_cat_id', 'web_category', 'web_type'],
    dispatch,
    'webCategory',
    updateCRField
  );
  const d = new Date();
  const paramsF = { user_id: 1, month: d.getMonth() + 1, year: d.getFullYear(), status: 1 };

  getCRS('/cr/getcr/', useAxios, dispatch, paramsF, updateCRField);

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
