import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import NotFound from './component/NotFound';
import Layout from './component/Layout';
import NavigationBar from './component/NavigationBar';

const App = () => (
  <>
    <Layout>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Layout>
  </>
);

export default App;
