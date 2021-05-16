import React from 'react'
import { Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from 'reactstrap'
import './ContactUs.css'

function ContactUs () {
  return (
        <>
            <div className="section landing-section">
                <Container className="u-border">
                    <Row>
                        <Col lg='6'>
                            <h2 className=" small-heading">Keep in touch with us</h2>
                            <Form className="contact-form">
                                <Row>
                                    <Col md="12">
                                        <label className="mb-0 desc-ssk">Name</label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="nc-icon nc-single-02"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Name" type="text"/>
                                        </InputGroup>
                                    </Col>
                                    <Col md="12">
                                        <label className="mb-0 desc-ssk">Email</label>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="nc-icon nc-email-85"/>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Email" type="email"/>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <label className="mb-0 desc-ssk">Message</label>
                                <Input
                                    placeholder="Tell us your thoughts and feelings..."
                                    type="textarea"
                                    rows="4"
                                />
                                <Row>
                                    <Col className="" md="4">
                                        <a className=" btn mt-3"
                                           href="javascript:alert('Sorry! There has been some problem ');">Send</a>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col lg="6">
                            <h2 className="ml-5 small-heading">Contact details</h2>
                            <div className="row u-margin-top-large">

                                <Col md="1">
                                    <i className="fa fa-phone contact-icon"/>
                                </Col>
                                <Col md="10" className="ml-3 mt-4">
                                    <p className="desc-ssk">Phone Number : +91 9521597992 </p>
                                </Col>

                                <Col md="1">
                                    <i className="fa fa-envelope-square contact-icon"/>
                                </Col>
                                <Col md="10" className="ml-3 mt-4">
                                    <p className="desc-ssk">Email id : iitkauv@gmail.com </p>
                                </Col>

                                <Col md="1">
                                    <i className="fa fa-map-marker contact-icon"/>
                                </Col>
                                <Col md="10" className="ml-3 mt-4">
                                    <p className="desc-ssk">Address : AUV Room, Hall of Residence 2,
                                        Indian Institute of Technology, Kanpur, Uttar Pradesh, India - 208016 </p>
                                </Col>
                            </div>
                        </Col>

                    </Row>

                </Container>
            </div>

        </>
  )
}

export default ContactUs
