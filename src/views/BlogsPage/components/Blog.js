// eslint-disable-next-line no-use-before-define
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Blog.css'
import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
function Blog (props) {
  const topath = '/blogs/' + props.blog[1].id
  console.log('Props recieved in blog are')
  console.log(props.blog[1])
  return (
        <>
            <div className="section landing-section ">
                <Container className="red-back">
                    <Row className="blog-container">
                        <Col sm="0" md="4" className=""/>

                        <Col sm="12" md="8" className="headings-container">
                            <h2 className="small-heading-edited blog-date">
                                {props.blog[1].date}
                            </h2>
                            <h1 className=" primary-heading-blog">{props.blog[1].heading}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="4" className="">
                            <img src={props.blog[1].image} className="blog-image" alt=""/>
                        </Col>

                        <Col sm="12" md="8" className="headings-container">
                            <p className="desc-ssk1" style={{ textAlign: 'left' }}>
                                {props.blog[1].para1}
                            </p>
                            <Link to={topath}>
                                <div className="btn-blue">Read More</div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
  )
}

export default Blog
