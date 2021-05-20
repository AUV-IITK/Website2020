import React from "react";
 
// reactstrap components
import { Button, Container } from "reactstrap";
import auvlogo from 'assets/img/auv-logo.png';
import "./Header.css"
// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();
  // const auvstyle= {
  //   width: '40%',
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)'
  // }
  const h3style= {
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: 'translate(-50%,110%)'
  }
  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/anahita-2.jpg") + ")"
        }}
        className="page-header trim "
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center push-down">
            {/* <h1>Example page</h1> */}
            <h1>Anahita</h1>
            {/* <h3>Start designing your landing page here.</h3> */}
            <br />
            <h3  className="heading-text mt-2">The Goddess of Waters</h3>
            {/* <Button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline>
              Download
            </Button> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;