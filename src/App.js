import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import { Layout, NavigationBar, Home, Message, History, Tasks, NotFound } from './component/index';

const Nav = withRouter(NavigationBar);

const App = () => (
  <Layout>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/history" component={History} />
        <Route exact path="/tasks" component={Tasks} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <GlobalStyle />
  </Layout>
);

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  :root{
    --color-main:#F6A01D;
    --color-alt-main:#FCD05F;
    --color-light:#FEE1B7;
    --color-xlight:#FAB25F;
    --color-xslight:#F9F1E9;
    --color-grey:#AEA1AE;
    --color-bg-grey: #F4F6F8;
    --color-text:#110F10;
    --color-red:#F93C1A;
    --color-blue:#3841E7;
    --sidebar-width: 10vw;
  }
  body{
    color: var(--color-text);
    font-family: 'Roboto', sans-serif;
  }
`;

export default App;
