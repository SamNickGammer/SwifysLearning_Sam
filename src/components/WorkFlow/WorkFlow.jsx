import React from 'react';
import NevigationBar from './NevigationBar';
import PricingPlan from './PricingPlan';
import Footer from './Footer';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function WorkFlow() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <NevigationBar />
            <PricingPlan />
            <Footer />
          </Route>
          <Route path="/accounts">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
