import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './components/Pages/Home';
import About from './components/Pages/About';

const listSyle = {
  marginRight: 10,
  textDecoration: 'none',
  color: 'white',
};
const headerNevStyle = {
  background: '#302e2e',
  height: 25,
  color: 'white',
  textDecoration: 'none',
};
const ulStyle = {
  listStyleType: 'none',
  display: 'flex',
  position: 'relative',
};
export default function AppRoute() {
  return (
    <div>
      <Router>
        <header style={headerNevStyle}>
          <ul style={ulStyle}>
            <li>
              <Link to="/" style={listSyle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={listSyle}>
                About
              </Link>
            </li>
            <li>
              <Link to="/component" style={listSyle}>
                Component
              </Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/component">
            <ComponentFn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function ComponentFn() {
  return (
    <div>
      <h1>Hello I am Function Component </h1>
    </div>
  );
}
