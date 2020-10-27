import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import {Login, Home} from './pages'
import './App.css';
import store from "./store/index"

function App() {
  return (
    <Provider store = {store}>
      <Router>
      <Switch>
        <Route
          component = {Login}
          exact path = "/"
        />
        <Route
          component = {Home}
          exact path = "/home"
        />
      </Switch>
    </Router>
    </Provider>
    
  );
}

export default App;
