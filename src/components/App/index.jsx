import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import 'antd/dist/antd.css';
import './app.scss';
import { Layout, Spin } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import MainHeader from '../header/index';
import Home from '../home';
import Metrics from '../metrics';
import Support from '../support';
import Navigation from '../navigation';
import CustomFooter from '../footer';
import { updateCRField } from '../../actions/createCR';
import { getOptions, getWebCatOptions, getCRS, getOptionsByAxios } from '../../helper';

const { Header, Content, Footer } = Layout;
const fetchData = () => {
  const d = new Date();
  const paramsF = { user_id: 1, month: d.getMonth() + 1, year: d.getFullYear(), status: 1 };
  const webAppOptions = getOptionsByAxios('web_types/', 'GET', {});
  const portOutgoingOptions = getOptionsByAxios('porttypes/', 'GET', {});
  const portStatusOptions = getOptionsByAxios('blockstatus/', 'GET', {});
  const fileOptions = getOptionsByAxios('filetypes/', 'GET', {});
  const ticketStatusOptions = getOptionsByAxios('statustypes/', 'GET', {});
  const allCrs = getOptionsByAxios('/cr/getcr/', 'POST', paramsF);
  const webCategory = getOptionsByAxios('web_category/', 'GET', {});
  const results = {};
  return webAppOptions
    .then(result => {
      if (result) {
        const data = result.data.data.map(item => ({ value: item.web_id, label: item.web_type }));
        results.webAppOptions = data;
        return portOutgoingOptions;
      }
    })
    .then(result1 => {
      const data = result1.data.data.map(item => ({ value: item.port_id, label: item.port_type }));
      results.portOutgoingOptions = data;
      return portStatusOptions;
    })
    .then(result2 => {
      const data = result2.data.data.map(item => ({ value: item.block_id, label: item.block_status }));
      results.portStatusOptions = data;
      return fileOptions;
    })
    .then(result3 => {
      const data = result3.data.data.map(item => ({ value: item.file_id, label: item.file_type }));
      results.fileOptions = data;
      return ticketStatusOptions;
    })
    .then(result4 => {
      const data = result4.data.data.map(item => ({ value: item.status_id, label: item.status }));
      results.ticketStatusOptions = data;
      return allCrs;
    })
    .then(result5 => {
      results.allCrs = result5.data.data;
      return webCategory;
    })
    .then(result6 => {
      const data = result6.data.data.map(item => ({
        value: item.web_cat_id,
        label: item.web_category,
        type: item.web_type
      }));
      results.webCategory = data;
      return results;
    });
};
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData().then(data => dispatch(updateCRField({ ...data })));

    // getOptions('web_types/', useAxios, ['web_id', 'web_type'], dispatch, 'webAppOptions', updateCRField);
    // getOptions('porttypes/', useAxios, ['port_id', 'port_type'], dispatch, 'portOutgoingOptions', updateCRField);
    // getOptions('blockstatus/', useAxios, ['block_id', 'block_status'], dispatch, 'portStatusOptions', updateCRField);
    // getOptions('filetypes/', useAxios, ['file_id', 'file_type'], dispatch, 'fileOptions', updateCRField);
    // getOptions('statustypes/', useAxios, ['status_id', 'status'], dispatch, 'ticketStatusOptions', updateCRField);
    // getWebCatOptions(
    //   'web_category/',
    //   useAxios,
    //   ['web_cat_id', 'web_category', 'web_type'],
    //   dispatch,
    //   'webCategory',
    //   updateCRField
    // );
    // const d = new Date();
    // const paramsF = { user_id: 1, month: d.getMonth() + 1, year: d.getFullYear(), status: 1 };
    // getCRS('/cr/getcr/', useAxios, dispatch, paramsF, updateCRField);
  }, [dispatch]);

  const CR = useSelector(state => state.createCR);
  const { loading } = CR;
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
      {loading && (
        <div className="spinner">
          <Spin />
        </div>
      )}
    </Layout>
  );
}

export default App;
