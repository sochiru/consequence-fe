import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, useHistory } from 'react-router-dom';
import useAuth from 'hooks/useAuth';
import PAGES from 'constants/pages';

/**
  * Renders a private route view with specified layout
  */
const PrivateRouteWithLayout = ({
  layout: Layout, component: Component, title, permissions, ...rest
}) => {
  const { isAuthenticated, clearClient } = useAuth();
  const history = useHistory();

  useEffect(() => {
    document.title = `Consequence | ${title}`;

    return () => { };
  }, [title]);

  if (!isAuthenticated()) {
    clearClient();
    history.push(PAGES.SIGN_IN);
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout permissions={permissions}>
          <Component {...props} {...rest} />
        </Layout>
      )}
    />
  );
};

PrivateRouteWithLayout.propTypes = {
  /**
   * The view component to render when route matches
   */
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  /**
   * The layout component to render when route matches
   */
  layout: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
  /**
   * If 'true', do an exact match compare of the path
   */
  exact: PropTypes.bool.isRequired,
  /**
   * The path of the route
   */
  path: PropTypes.string.isRequired,
  /**
   * The title of the document
   */
  title: PropTypes.string.isRequired,
};

export default PrivateRouteWithLayout;
