import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import List from "./pages/movie-list"
import Home from './pages/home/index'
import Sign from './pages/sign-ın/'
import Browse from './pages/browse/'

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/sign">
              <Sign />
            </Route>
            <Route exact path="/browse">
              <Browse />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
