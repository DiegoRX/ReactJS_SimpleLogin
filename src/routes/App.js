import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBdsr94Tsp6W0o1ze0KBw2HHm7uC4K3UHk",
    authDomain: "simple-vd.firebaseapp.com",
    databaseURL: "https://simple-vd.firebaseio.com",
    projectId: "simple-vd",
    storageBucket: "simple-vd.appspot.com",
    messagingSenderId: "786304133984",
    appId: "1:786304133984:web:88b4c848c3ad5888e7cc05",
    measurementId: "G-ZNF380424F"
  };

var appFirebase = firebase.initializeApp(firebaseConfig);

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
        <Route exact path='/LandingPage ' component={LandingPage} />
        {/* <Route component={Login} /> */}
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
