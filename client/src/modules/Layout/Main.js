import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { loadTheme } from '@microsoft/load-themed-styles';
import Layout from 'antd/lib/layout';
// Components
import Home from './HomePage';
import Users from '../Users/UsersPage';

const Main = () => (
  <Layout style={{ background: '#fff', height: '80vh', overflow: 'auto', fontFamily: '"Selawik UI WestEuropean","Selawik UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif' }}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/users' component={Users}/>
    </Switch>
  </Layout> 
);

// loadTheme({
//   'themePrimary': 'red'
// });

export default Main;