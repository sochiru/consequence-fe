import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import PublicLayout from 'components/PublicLayout/PublicLayout';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Dashboard from 'pages/Dashboard';
import PrivateRouteWithLayout from 'components/PrivateRouteWithLayout/PrivateRouteWithLayout';
import NotFound from 'pages/NotFound';
import PAGES from 'constants/pages';
import PrivateLayout from 'components/PrivateLayout/PrivateLayout';
import Accounts from 'pages/Accounts';
import Cards from 'pages/Cards';
import AccountDetail from 'pages/AccountDetail';
import CardDetail from 'pages/cardDetail';
import RouteWithLayout from './components/RouteWithLayout/RouteWithLayout';

/**
 * Renders the routes
 */
const Routes = () => (
  <Switch>
    <Redirect
      exact
      from="/"
      to={PAGES.DASHBOARD}
    />
    <PrivateRouteWithLayout
      title="Dashboard"
      component={Dashboard}
      exact
      layout={PrivateLayout}
      path={PAGES.DASHBOARD}
    />
    <PrivateRouteWithLayout
      title="Accounts"
      component={Accounts}
      exact
      layout={PrivateLayout}
      path={PAGES.ACCOUNTS}
    />
    <PrivateRouteWithLayout
      title="Accounts"
      component={AccountDetail}
      exact
      layout={PrivateLayout}
      path={PAGES.ACCOUNT_DETAIL}
    />
    <PrivateRouteWithLayout
      title="Cards"
      component={Cards}
      exact
      layout={PrivateLayout}
      path={PAGES.CARDS}
    />
    <PrivateRouteWithLayout
      title="Cards"
      component={CardDetail}
      exact
      layout={PrivateLayout}
      path={PAGES.CARD_DETAIL}
    />
    <RouteWithLayout
      title="Sign in"
      component={SignIn}
      exact
      layout={PublicLayout}
      path={PAGES.SIGN_IN}
    />
    <RouteWithLayout
      title="Sign up"
      component={SignUp}
      exact
      layout={PublicLayout}
      path={PAGES.SIGN_UP}
    />
    <RouteWithLayout
      title="Not found"
      component={NotFound}
      exact
      layout={PublicLayout}
      path={PAGES.NOT_FOUND}
    />
    {/* <RouteWithLayout
      title="Sign Out"
      component={SignOut}
      exact
      layout={PublicLayout}
      path={PAGES.SIGN_OUT}
    /> */}
    <Redirect to={PAGES.NOT_FOUND} />
  </Switch>
);

export default Routes;
