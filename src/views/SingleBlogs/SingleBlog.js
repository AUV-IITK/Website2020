import React, { Component } from "react";

// reactstrap components
import { Container, Row, Col, Spinner } from "reactstrap";

// core components
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import axios from "../../axios-blogs";
class BlogsPage extends Component {
  state = {
    blogs: {
      heading: "",
      para1: "",
      para2: "",
      id: "",
      subheading: "",
      date: "",
      image: "",
    },
    blogsArray: [],
    loading: false,
  };
  
  componentDidMount() {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0,0);
    // console.log("single blog");
    // console.log(this.props.location.pathname)
    this.setState({ loading: true });
    axios
      .get(
        "https://auv-iitk.firebaseio.com" +
          this.props.location.pathname +
          ".json"
      )
      .then((response) => {
        this.setState({ blogs: response.data, loading: false });
        // console.log("blogs recieved");
        const newArray = Object.entries(this.state.blogs);
        this.setState({ blogsArray: newArray });
        console.log(this.state.blogs);
      });
  }
  render() {


    var content = null;
    if(this.state.loading !== true){
      content = <div><div className="section text-center ">
      <Container className="reduce-margin">
        <Row>
          <h2 className="heading-main" style={{ display: "block" }}>
            {this.state.blogs.heading}
          </h2>
          {/* <h2 className="small-heading"style={{display:'block'}}>{this.state.blogs.subheading}</h2>        */}
        </Row>
      </Container>
    </div>
    <div className="main">
      <Container>
        <img src={this.state.blogs.image} className="image-anahita"></img>
        <h1 className="desc-ssk1">{this.state.blogs.para1}</h1>
        <h1 className="desc-ssk1">{this.state.blogs.para2}</h1>
      </Container>
    </div></div>
    }
    else{
      content = <Spinner className="blogs-page-spinner"/>
    }
    return (
      <div className="mobile-responsive">
        <ExamplesNavbar activePage="/blogs" />
        {content}
      </div>
    );
  }
}

export default BlogsPage;
