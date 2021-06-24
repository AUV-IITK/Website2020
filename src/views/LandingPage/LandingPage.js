import React from "react";

import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";

// core components
import AboutUs from "./components/AboutUs/AboutUs.js";
import Team from "./components/Team/Team.js";
import Sponsors from "./components/Sponsors/Sponsors.js";
import Vehicles from "./components/Vehicles/Vehicles.js";
import Achievements from "./components/Achievements/Achievements";
import "./LandingPage.css";
import FadeIn from "views/Animations/FadeIn.js";
function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <div className="mobile-responsive">
      <LandingPageHeader />
      <ExamplesNavbar page="landing-page" />
      <div className="main">
        <FadeIn>
          <AboutUs />
        </FadeIn>
        <FadeIn>
          <Team className="team" />
        </FadeIn>
        <FadeIn>
          <Vehicles />
        </FadeIn>
        <FadeIn>
          <Achievements />
        </FadeIn>
        <FadeIn>
          <Sponsors className="sponsors" />
        </FadeIn>
      </div>
    </div>
  );
}

export default LandingPage;
