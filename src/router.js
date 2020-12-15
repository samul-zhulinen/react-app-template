import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { utils } from '@ytu-mf/h5-common';

const App = () => {
  const routers = [
    {
      path: '/',
      component: () => import('./pages/index'),
      title: '首页',
    },
  ];
  const getRouteProps = ({ path, component, title }) => {
    return {
      key: path,
      exact: true,
      path,
      component: Loadable({
        loader: component,
        loading: () => {
          return null;
        },
        render(loaded, props) {
          let Component = loaded.default;
          let history = utils.historyEnhance(props.history);

          utils.setTitle(title);

          return <Component {...props} history={history} />;
        },
      }),
    };
  };
  let basename = '/yuantu/h5-mf/ytu-template/';
  if (window.__POWERED_BY_QIANKUN__) {
    basename = '/yuantu/h5-app/ytu-template';
  }
  return (
    <Router basename={basename}>
      <Switch>
        {routers.map((route) => (
          <Route {...getRouteProps(route)} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
