// eslint-disable-next-line no-use-before-define
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Blog.css";
import bI from "../../../assets/img/blog/BlogImages/hydrophone.jpeg";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Blog(props) {
  const topath = "/blogs/" + props.id;
  console.log(topath);
  return (
    <>
      <div className="section blog-card">
        <div className="blog-content">
          <h1 className="blog-heading">{props.heading}</h1>
          <div className="subheading-container">
            <h3 className="blog-author">{props.author}</h3>
            <h3 className="blog-date">{props.date}</h3>
          </div>
          <Row>
            <Col lg="6">
              <img
                src={require("assets/img/blog/BlogImages/" + props.bannerImage)}
                className="blog-banner-image"
              ></img>
            </Col>
            <Col style={{ display: "flex" }} lg="6">
              <p className="blogs-description">
                {props.abstract}
                <Link to={topath} className="blogs-more-button">
                  Read More
                </Link>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Blog;
