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
import Footer from './components/Common/Footer';
import Cars from "./components/Category/Vehicles/Cars";

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
            <Footer />
          </Router>
          <Router path="/publish">
            <Header />
            <Publish />
            <Footer />
          </Router>
          <Router path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Router>
          <Router path="/account">
            <Header />
            <Account />
            <Footer />
          </Router>
          <Router path="/vehicles">
            <Header />
            <Vehicles />
            <Footer />
          </Router>
          <Router path="/electronic">
            <Header />
            <Electronic />
            <Footer />
          </Router>
          <Router path="/property">
            <Header />
            <Property />
            <Footer />
          </Router>
          <Router path="/jobs">
            <Header />
            <Jobs />
            <Footer />
          </Router>
          <Router path="/HandG">
            <Header />
            <HandG />
            <Footer />
          </Router>
          <Router path="/education">
            <Header />
            <Education />
            <Footer />
          </Router>
          <Router path="/publicprofile">
            <Header />
            <PublicProfile />
            <Footer />
          </Router>
          <Router path="/cars">
            <Header />
            <Cars />
            <Footer />
          </Router>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
