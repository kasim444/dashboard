import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import { createGlobalStyle } from 'styled-components';
import { Layout, NavigationBar, Home, NotFound } from './component/index';

const Nav = withRouter(NavigationBar);

const App = () => (
  <Layout>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/message" component={Home} />
        <Route exact path="/history" component={Home} />
        <Route exact path="/tasks" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <GlobalStyle />
  </Layout>
);

const GlobalStyle = createGlobalStyle`
  :root{
    --color-main:#F6A01D;
    --color-alt-main:#FCD05F;
    --color-light:#FEE1B7;
    --color-xlight:#FAB25F;
    --color-xslight:#F9F1E9;
    --color-grey:#AEA1AE;
    --color-bg-grey: #F4F6F8;
    --color-bg-right-image: #FFF2DE;
    --color-text:#110F10;
    --color-red:#FF7045;
    --color-blue:#5C6AFF;
    --sidebar-width: 10vw;
  }
  

  body{
    font-family: 'Cabin Condensed', sans-serif;
    color: var(--color-text);

    a {
      text-decoration: none;
      color: var(--color-red);
      transition: all .4s ease;

      &:hover{
        text-decoration: none;
      }
    }
  }
`;

export default App;
