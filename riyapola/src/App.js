import React from 'react';
import './App.css';
import Header from "./components/Common/Header";
import Home from "./components/Common/Home";
import Dashboard from './components/Dashboard/PublicProfile';
import Login from "./components/Login/Login";
import Publish from "./components/Publish/Publish";
import Account from "./components/Dashboard/Account";
import PublicProfile from "./components/Dashboard/PublicProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './components/Contact/Contact';
import Vehicles from './components/Category/Vehicles/Vehicles';
import Electronic from "./components/Category/Electronics/Electronics";
import Property from "./components/Category/Property/Property";
import Jobs from "./components/Category/Jobs/Jobs";
import HandG from "./components/Category/Home & Gardens/HandG";
import Education from './components/Category/Education/Education';

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
          <Router path="/publish">
            <Header />
            <Publish />
          </Router>
          <Router path="/contact">
            <Header />
            <Contact />
          </Router>
          <Router path="/account">
            <Header />
            <Account />
          </Router>
          <Router path="/vehicles">
            <Header />
            <Vehicles />
          </Router>
          <Router path="/electronic">
            <Header />
            <Electronic />
          </Router>
          <Router path="/property">
            <Header />
            <Property />
          </Router>
          <Router path="/jobs">
            <Header />
            <Jobs />
          </Router>
          <Router path="/HandG">
            <Header />
            <HandG />
          </Router>
          <Router path="/education">
            <Header />
            <Education />
          </Router>
          <Router path="/publicprofile">
            <Header />
            <PublicProfile />
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
