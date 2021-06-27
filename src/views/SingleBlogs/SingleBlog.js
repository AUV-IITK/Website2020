import React, { Component } from "react";
import "./SingleBlog.css"
// reactstrap components
import { Container, Row, Col, Spinner } from "reactstrap";
import data from "../../data/Blogs.json";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";
class BlogsPage extends Component {
  state = {
    pathid: "",
    blogid: "",
    loading: false,
  };

  getLastItem = (thePath) => thePath.substring(thePath.lastIndexof("/") + 1);

  componentDidMount() {
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    this.setState({ loading: true });
    if (data) {
      this.setState({ loading: false });
    }
    this.setState({ pathid: this.props.location.pathname });
  }
  render() {
    let blogid = this.state.pathid.substring(
      this.state.pathid.lastIndexOf("/") + 1
    );
    console.log(blogid);
    console.log(data.blogsData);
    const disp = data.blogsData.map((recievedBlog) => {
      if (blogid === recievedBlog.blogId) {
        return (
          <div className="single-blog">
            <h1 className="blog-heading-single-page" style={{ fontSize: "3.4rem" }}>{recievedBlog.heading}</h1>
            <h2 className="single-blog-author" style={{ fontSize: "1.8rem" }}>{recievedBlog.author}</h2>
            <h2 className="single-blog-date" style={{ fontSize: "1.8rem" }}> {recievedBlog.date} </h2>
            <div>
              {recievedBlog.body.map((contentobject) => {
                if (contentobject.type == "para") {
                  return <p className="blogs-description text-left mb-5">{contentobject.content}</p>;
                } else if (contentobject.type == "image") {
                  return (
                    <img
                      className="single-blog-image"
                      src={require("assets/img/blog/BlogImages/" +
                        contentobject.src)}
                    ></img>
                  );
                } else if (contentobject.type == "h2") {
                  return <h2 className="blog-secondary-heading text-left">{contentobject.content}</h2>;
                } else if (contentobject.type == "list-block") {
                  return (
                    <div className="blog-list-block">
                      <h3 className="blog-list-heading">{contentobject.listHeading}</h3>
                      {contentobject.listItems.map((listItem) => {
                        return <li className="blog-list-item">{listItem}</li>;
                      })}
                    </div>
                  );
                } else {
                  return;
                }
              })}
            </div>
          </div>
        );
      } else {
        return;
      }
    });
    return (
      <div className="mobile-responsive">
        <ExamplesNavbar activePage="/blogs" />
        {disp}
      </div>
    );
  }
}

export default BlogsPage;
