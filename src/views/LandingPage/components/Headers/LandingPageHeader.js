import React from "react";

// reactstrap components
import "./LPHeader.scss";

const scrollHandler = () => {
  console.log("scroll handler");
  let pageHeight = window.innerHeight - window.pageYOffset;
  window.scrollBy({
    top: pageHeight,
    behavior: "smooth",
  });
};
function LandingPageHeader() {
  return (
    <div className="header-background">
      <div className="image-fluid header-styling"></div>
      <div className="banner-content-container">
        <img
          src={require("../../../../assets/img/logo_iitk_actual.png")}
          className="banner-auv-logo"
        ></img>
        <h1 className="banner-heading">Team AUV-IITK</h1>
        {/* <h2 className="banner-subheading">A dive into the unfathomable</h2> */}
        <button className="banner-dive-button" onClick={scrollHandler}>
          Dive In
        </button>
        {/* Use this later once we have a good image of triton */}
        {/* <div className="triton-container">
          <img
            src={require("../../../../assets/img/backgrounds/triton-banner.png")}
            className="triton-banner"
          ></img>
          <img
            src={require("../../../../assets/img/backgrounds/triton-light.png")}
            className="triton-light"
          ></img>
        </div> */}
      </div>
    </div>
  );
}

export default LandingPageHeader;
