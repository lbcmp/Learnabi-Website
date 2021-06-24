import React from "react";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";

import Navigation from "./OtherComponents/Navigation";
import Home from "./OtherComponents/Home";
import Mission from "./OtherComponents/Mission";
import AboutUs from "./OtherComponents/AboutUs";
import OurTeam from "./OtherComponents/OurTeam";
import Contact from "./OtherComponents/Contact";
// import UserProfile from "./components/user/userProfile";

import AdminLogin from "./components/admin/adminLogin";

import AdminContact from "./OtherComponents/Administrator/AdminContact";
import AdminTeam from "./OtherComponents/Administrator/AdminTeam";


const App = () => {
  return (
    <React.Fragment>

      {/* <UserProfile /> */}
      {/* <AdminLogin/> */}

      <HashRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mission" component={Mission} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/ourTeam" component={OurTeam} />
          <Route path="/contact" component={Contact} />
          <Route path="/adminContact" component={AdminContact} />
          <Route path="/adminTeam" component={AdminTeam} />
        </Switch>

      </HashRouter>

      
    </React.Fragment>
  );
};

export default App;
