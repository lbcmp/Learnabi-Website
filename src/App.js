import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navigation from "./OtherComponents/Navigation";
import Home from "./OtherComponents/Home";
import Mission from "./OtherComponents/Mission";
import AboutUs from "./OtherComponents/AboutUs";
import OurTeam from "./OtherComponents/OurTeam";
import Contact from "./OtherComponents/Contact";
import UserLoginButton from './components/user/userLoginButton';

const App = () => {
  return (

    <React.Fragment>
      <UserLoginButton />

      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mission" component={Mission} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/ourTeam" component={OurTeam} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
