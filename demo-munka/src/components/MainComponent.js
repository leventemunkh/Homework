import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

import Home from "./HomeComponent";
import Profiles from "./ProfilesComponent";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

function Main() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/profiles" component={Profiles} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  );
}

export default withRouter(Main);
