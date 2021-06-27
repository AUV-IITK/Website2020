// eslint-disable-next-line no-use-before-define
import React, { Component } from "react";
import { Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col, Button } from 'reactstrap'
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-contact";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import "./ContactUsPage.css"
class ContactUsPage extends Component {
  state = {
    name: "",
    message: "",
    email: ""
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.documentElement.classList.remove("nav-open");
  }

  postDataHandler = (event) => {
    event.preventDefault();
    console.log("Post Data Handler Called");
    const Data = {
      name: this.state.name,
      message: this.state.message,
      email: this.state.email
    }
    axios.post('/message.json', Data).then(response => {
      console.log(response);
    })

    this.setState({
      name: "",
      email: "",
      message: ""
    })
  }

  nameChangedHandler = (event) => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    })
  }

  messageChangedHandler = (event) => {
    event.preventDefault();
    this.setState({
      message: event.target.value
    })
  }

  emailChangedHandler = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value
    })
  }

  render() {
    return (
      <>
        <ExamplesNavbar activePage="/contact-us" />
        <div className="section text-center ">
          <Container className="reduce-margin">
            <Row>
              <h2 className="heading-contact-us" style={{ textAlign: "center", zIndex:"10" }}>Contact Us</h2>
            </Row>
          </Container>
        </div>
        <Container className="main">
          <div className="section landing-section">
            <Container className="u-border contact-us-section">
              <Row>
                <Col lg="6" className="contact-us-form-container">
                  <h2 className=" heading-small-contact-us">Share Feedback or Ask your Queries </h2>
                  <Form className="contact-form" onSubmit={this.postDataHandler}>
                    <Row>
                      <Col md="12">
                        <label className="mb-0 desc-auv">Name</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Name"
                            type="text"
                            value={this.state.name}
                            onChange={this.nameChangedHandler} />
                        </InputGroup>
                      </Col>
                      <Col md="12">
                        <label className="mb-0 desc-auv">Email</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            value={this.state.email}
                            onChange={this.emailChangedHandler} />
                        </InputGroup>
                      </Col>
                    </Row>
                    <label className="mb-0 desc-auv">Message</label>
                    <Input
                      placeholder="Tell us your thoughts and feelings..."
                      type="textarea"
                      rows="4"
                      value={this.state.message}
                      onChange={this.messageChangedHandler}
                    />
                    <Button className="contact-us-form-button">
                      Send
                    </Button>
                  </Form>
                </Col>
                <Col lg="6" className="contact-us-form-container">
                  <h2 className="ml-5 small-heading">Contact details</h2>
                  <div className="row u-margin-top-large">
                    <Col md="1">
                      <i className="fa fa-phone contact-icon" />
                    </Col>
                    <Col md="10" className="ml-3 mt-4">
                      <p className="desc-auv">Phone Number : +91 9521597992 </p>
                    </Col>

                    <Col md="1">
                      <i className="fa fa-envelope-square contact-icon" />
                    </Col>
                    <Col md="10" className="ml-3 mt-4">
                      <p className="desc-auv">Email id : iitkauv@gmail.com </p>
                    </Col>

                    <Col md="1">
                      <i className="fa fa-map-marker contact-icon" />
                    </Col>
                    <Col md="10" className="ml-3 mt-4">
                      <p className="desc-auv">
                        Address : AUV Room, Hall of Residence 2, Indian
                        Institute of Technology, Kanpur, Uttar Pradesh, India -
                        208016{" "}
                      </p>
                    </Col>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </>
    );
  }
}

export default ContactUsPage;
