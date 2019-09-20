import React, { Suspense, lazy } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import history from '../utils/history';
import Layout from '../components/Layout/Layout';

const Dash = lazy(() => import('../features/DashBoard'));
const Auth = lazy(() => import('../features/Auth'));
const Trans = lazy(() => import('../features/TranVir'));
const Accounts = lazy(() => import('../features/Accounts'));

export default () => (
  <Suspense fallback={<div>Chargement...</div>}>
    <Router history={history}>
      <Switch>
        <Route exact path="/(auth|)" render={props => <Auth {...props} />} />
        <Layout>
          <Route
            exact
            path="/dashboard"
            render={props => <Dash {...props} />}
          />
          <Route
            exact
            path="/transvir"
            render={props => <Trans {...props} />}
          />
          <Route
            exact
            path="/accounts"
            render={props => <Accounts {...props} />}
          />
        </Layout>
      </Switch>
    </Router>
  </Suspense>
);
