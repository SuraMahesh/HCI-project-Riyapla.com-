import React from 'react';
import './App.css';
import Header from "./components/Common/Header";
import Home from "./components/Common/Home";
import Dashboard from './components/Dashboard/PublicProfile';
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Router path="/login">
            <Login />
          </Router>
          <Router path="/dashboard">
            <Header />
            <Dashboard />
          </Router>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
