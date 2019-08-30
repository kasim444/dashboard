import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import About from './component/About';
import Home from './component/Home';
import History from './component/History';
import NotFound from './component/NotFound';
import Layout from './component/Layout';
import NavigationBar from './component/NavigationBar';

const GlobalStyle = createGlobalStyle`
  :root{
    --color-main:#F6A01D;
    --color-alt-main:#FCD05F;
    --color-light:#FEE1B7;
    --color-xlight:#FAB25F;
    --color-xslight:#F9F1E9;
    --color-grey:#AEA1AE;
    --color-text:#110F10;
    --color-red:#F93C1A;
    --color-blue:#3841E7;
    --sidebar-width: 11.5vw;
  }
  body{
    color: --color-text;
  }
`;
const App = () => (
  <Layout>
    <NavigationBar />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/history" component={History} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <GlobalStyle />
  </Layout>
);

export default App;
