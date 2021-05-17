/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
// pages
import Footer from "./components/Footers/Footer";

import LandingPage from "views/LandingPage/LandingPage";
import DemoFooter from "components/Footers/DemoFooter";
import AboutUsPage from 'views/AboutUsPage/AboutUsPage';
import TeamPage from 'views/TeamPage/TeamPage'
import AnahitaPage from 'views/Vehicles/AnahitaPage/AnahitaPage';
import VarunPage from 'views/Vehicles/VarunPage/VarunPage';
import EventsPage from 'views/EventsPage/EventsPage';
import BlogsPage from 'views/BlogsPage/BlogsPage';
import ContactUsPage from 'views/ContactUsPage/ContactUsPage';
import SingleBlog from 'views/SingleBlogs/SingleBlog';
// others
ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} active="true"/>}
      />
      <Route
        path="/about-us"
        render={props => <AboutUsPage {...props} />}
      />
      <Route
        path="/team"
        render={props => <TeamPage {...props} />}
      />
      <Route
        path="/vehicles/anahita"
        render={props => <AnahitaPage {...props} />}
      />
      <Route
        path="/vehicles/varun"
        render={props => <VarunPage {...props} />}
      />

      <Route
        path="/events"
        render={props => <EventsPage {...props} />}
      />
      
      <Route
        path="/blogs/:id"
        render={props => <SingleBlog {...props} />}
      />
      <Route
        path="/blogs"
        render={props => <BlogsPage {...props} />}
      />



      <Route
        path="/contact-us"
        render={props => <ContactUsPage {...props} />}
      />
      <Redirect to="/landing-page" />
    </Switch>

    <Footer/>
  </BrowserRouter>,
  document.getElementById("root")
);
