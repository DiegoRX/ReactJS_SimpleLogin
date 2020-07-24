import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../container/Login';
import Registro from '../container/Registro';
import LandingPage from '../container/LandingPage';
import NotFound from '../container/NotFound';
import Layout from '../components/Layout';
import '../styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/registro' component={Registro} />
        <Route exact path='/landingPage' component={LandingPage} />
        {/* <Route component={Login} /> */}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
