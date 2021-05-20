// eslint-disable-next-line no-use-before-define
import React, { Component } from 'react'
// reactstrap components
import {
    Container,
    Row,
    Col,
    Spinner
} from "reactstrap";

// core components
import ExamplesNavbar from '../../components/Navbars/ExamplesNavbar'
import axios from '../../axios-blogs'

import Blog from './components/Blog';
class BlogsPage extends Component {

  state= {
    blogs: 0,
    blogsArray:[],
    loading: "false"
  }
  // React.useEffect(() => {
    
  // });
  componentDidMount(){ 
    document.documentElement.classList.remove("nav-open");
    // document.body.classList.add("profile-page");
    // return function cleanup() {
    //   document.body.classList.remove("profile-page");
    // };
    this.setState({loading:"true"});
    axios.get('https://auv-iitk.firebaseio.com/blogs.json')
          .then(response => {
              this.setState({blogs: response.data, loading: "false"});
              // console.log("blogs recieved");
              const newArray= Object.entries(this.state.blogs)
              this.setState({blogsArray: newArray});
              console.log(this.state.blogs);
          })
        }

render(){

  const blogList = this.state.blogsArray.map(recievedBlog => {
    return(
      <Blog blog={recievedBlog} key={recievedBlog.id}></Blog>
    )
  })

  console.log(this.state.laoding)

  const display= (this.state.loading == "true")? <Spinner className="blogs-page-spinner"/> : blogList;
  return (
    <>
    <ExamplesNavbar activePage="/blogs"/>
    <div className="section text-center ">
        <Container className="reduce-margin">
          
          <Row>
            <h2 className="heading-main">BLOGS</h2>          
          </Row>
        </Container>
    </div>
    
      <div className="main">
          {/* <Blog blog={blog1}></Blog> */}
          {/* <Blog blog={blog2}></Blog>
          <Blog blog={blog3}></Blog> */}
          {display}
      </div>  
    </>
  );
        }
}

export default BlogsPage;
