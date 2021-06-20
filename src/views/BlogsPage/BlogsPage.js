// eslint-disable-next-line no-use-before-define
import React, { Component } from "react";
// reactstrap components
import { Container, Row, Col, Spinner } from "reactstrap";

// core components
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
import axios from "../../axios-blogs";
import blogsData from "../../data/Blogs.json";
import Blog from "./components/Blog";
class BlogsPage extends Component {
  state = {
    blogs: 0,
    blogsArray: [],
    loading: "false",
  };
  // React.useEffect(() => {

  // });
  componentDidMount() {
    document.documentElement.classList.remove("nav-open");
    // document.body.classList.add("profile-page");
    // return function cleanup() {
    //   document.body.classList.remove("profile-page");
    // };
    this.setState({ loading: "true" });
    this.setState({ blogsArray: blogsData.blogsData });
    this.setState({ loading: "false" });
    // console.log(this.state.blogsArray);
    // console.log(blogsData.blogsData);
  }

  render() {
    console.log(this.state.blogsArray);
    const blogList = this.state.blogsArray.map((recievedBlog) => {
      return (
        // <h1>{recievedBlog.heading}</h1>
        <div>
          <Blog
            heading={recievedBlog.heading}
            author={recievedBlog.author}
            date={recievedBlog.date}
            bannerImage={recievedBlog.bannerImage}
            abstract={recievedBlog.abstract}
            id = {recievedBlog.blogId}
          ></Blog>
        </div>
      );
    });

    // console.log(this.state.laoding)

    const display =
      this.state.loading == "true" ? (
        <Spinner className="blogs-page-spinner" />
      ) : (
        blogList
      );
    return (
      <>
        <ExamplesNavbar activePage="/blogs" />
        <div className="section text-center ">
          <Container className="reduce-margin">
            <Row>
              <h2 className="heading-main">BLOGS</h2>
            </Row>
          </Container>
        </div>

        <div className="main">{display}</div>
      </>
    );
  }
}

export default BlogsPage;
