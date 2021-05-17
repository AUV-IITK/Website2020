import React from "react";
import "./TeamVideo.css";
import {

  Container,

} from "reactstrap";

function TalkAbout() {
  return (
    <>
      <div className="section text-center">
        <Container>
          <h2 className="title heading-main mb-5">Team Video</h2>
          <iframe
            className="yt-video"
            src="https://www.youtube.com/embed/2kunTvZ_zLI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Container>
      </div>
    </>
  );
}
export default TalkAbout;
