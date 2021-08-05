import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
  * Renders a route view with specified layout
  */
const RouteWithLayout = (props) => {
  const {
    layout: Layout, component: Component, title, ...rest
  } = props;

  useEffect(() => {
    document.title = `Consequence | ${title}`;

    return () => { };
  }, [title]);

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
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
  path: PropTypes.string.isRequired
};

export default RouteWithLayout;
