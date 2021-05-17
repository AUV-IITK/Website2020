import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import "./SubsystemHeads.css"
function TalkAbout() {
  return (
    <>
      <div className="section text-center">
        <Container>
        <div className="padding-small">
          <h2 className="title heading-main">Faculty Advisor</h2>
          <Col xl="4 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/indranilSaha.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3 pt-3">Prof. Indranil Saha</CardTitle>
                      <h6 className="desc-ssk1">Computer Science and Engineering Department, IITK</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <h1 className="title heading-main">Senior Members</h1>
          <Row>
            <Col lg="4 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/ayush.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Ayush Gupta</CardTitle>
                      <h6 className="desc-ssk1">Y17, Software Subsystem</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/inshu.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Inshu Namdev</CardTitle>
                      <h6 className="desc-ssk1">Y17, Electrical Subsystem</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="4 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/p.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Priank Prasad</CardTitle>
                      <h6 className="desc-ssk1">Y17, Mechanical Subsystem</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>

          </Row>

          <h1 className="title heading-main">Subsystem Heads</h1>
          <Row>
            <Col lg="3 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/sajal.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Sajal Goyal</CardTitle>
                      <h6 className="desc-ssk1"> Software Head</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/devendra.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Devendra Kharolia</CardTitle>
                      <h6 className="desc-ssk1"> Electrical Head</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/jaskeerat.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Jaskeerat Singh</CardTitle>
                      <h6 className="desc-ssk1">Mechanical Co-Head</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3 ml-auto mr-auto" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/kamlesh.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Kamlesh Kalsariya</CardTitle>
                      <h6 className="desc-ssk1">Mechanical co-Head</h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>

          </Row>

          <h1 className="title heading-main">Software Subsystem</h1>
          <Row>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/shubham.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Shubham Korde</CardTitle>
                      <h6 className="desc-ssk1"> </h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/prakhar.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Prakhar Maheshwari</CardTitle>
                      <h6 className="desc-ssk1"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/aryansh.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Aryansh Bansal</CardTitle>
                      <h6 className="desc-ssk1"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/Krishna.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Krishna Agrawal</CardTitle>
                      <h6 className="desc-ssk1"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <h1 className="title heading-main">Electrical Subsystem</h1>
          <Row>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/neelabh.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Neelabh Singhania</CardTitle>
                      <h6 className="desc-ssk1"> </h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/sunny.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Sunny Bhagat</CardTitle>
                      <h6 className="desc-ssk1"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            
          </Row>

          <h1 className="title heading-main">Mechanical Subsystem</h1>
          <Row>
          <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/shashank.jpeg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Shashank Katiyar</CardTitle>
                      <h6 className="desc-ssk1"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/tanishq.jpg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Tanishq Chourishi</CardTitle>
                      <h6 className="desc-ssk1"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col xl="3 ml-auto mr-auto" md="4" sm="6">
              <Card className="card-profile card-plain card-ssk">
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <img
                        alt="..."
                        src={require("assets/img/team/jayant.jpeg")}
                        className="image-prof"
                      />
                      <></>
                      <CardTitle tag="h4" className="desc-ssk1 pt-3">Jayant Reddy</CardTitle>
                      <h6 className="desc-ssk1"></h6>
                    </div>
                  </a>
                </CardBody>
                <CardFooter className="text-center margin-neg">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook flip" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin flip" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>

          </Row>
        </div>
        </Container>
      </div>

    </>
  );


}
export default TalkAbout;