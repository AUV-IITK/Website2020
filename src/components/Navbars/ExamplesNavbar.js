
import React from 'react';
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
import classnames from "classnames";
import auvlogomini from '../../assets/img/logos/logo_v1.32.png'
import "./ExamplesNavbar.css"
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarToggler,

} from "reactstrap";



function ExamplesNavbar(props) {
    
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 250 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar','custom-navbar-ssk'];
  if(props.page == "landing-page"){
    if(scrolled){
      x.push('scrolled');
     }
  }
  else x.push('scrolled');

  return (  
    <div  className={x.join(" ")} >
      <Navbar
      color-on-scroll="300"
      expand="lg"
      className="custom-navbar-ssk"
    >
      <Container className="navbar-container">
      <div className="navbar-translate">
           <NavbarBrand
            data-placement="bottom"
            to="/index"
            title="Coded by Creative Tim"
            tag={Link}
            style={{marginLeft:"20px",padding:"0 0"}}
          >
          <img className="minilogo w-100" src={auvlogomini} alt="logo" />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler u-margin-zero", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
            
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className=" justify-content-end"
          navbar
          isOpen={navbarCollapse} 
        >
          <Nav navbar className=" mr-5 navigation">
            <NavItem>
              <NavLink  className={props.activePage==="/landing-page" ? "navbar-content active" : "navbar-content"} to="/landing-page" tag={Link} onClick={toggleNavbarCollapse}>Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={props.activePage==="/about-us" ? "navbar-content active" : "navbar-content"} to="/about-us" tag={Link} onClick={toggleNavbarCollapse}>
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={props.activePage==="/team" ? "navbar-content active" : "navbar-content"} to="/team" tag={Link} onClick={toggleNavbarCollapse}>
                Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={props.activePage==="/events" ? "navbar-content active" : "navbar-content"} to="/events" tag={Link} onClick={toggleNavbarCollapse} onClick={toggleNavbarCollapse}>
                Events
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="/index" tag={Link} component={Link} to="#sponsors">
                Sponsors
              </NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle
                aria-expanded={false}
                aria-haspopup={true}
                caret
                color="black"
                data-toggle="dropdown"
                href="#pablo"
                id="dropdownMenuButton"
                nav
                onClick={e => e.preventDefault()}
                role="button"
                style={{textAlign:'center'}}
                className={props.activePage==="/vehicles/anahita" || props.activePage==="/vehicles/varun" ? "navbar-content active" : "navbar-content"}
              >
                Vehicles
                      </DropdownToggle>
              <DropdownMenu
              
                aria-labelledby="dropdownMenuButton"
                className="dropdown-info ml-auto mr-auto"
                style={{backgroundColor:"rgb(220,220,220)",borderRadius:"0", textAlign:"center"}}
              >
                
                  <Link to='/vehicles/anahita' style={{color: 'black'}}>
                  <DropdownItem
                  // href="#pablo"
                  // onClick={e => e.preventDefault()}
                  style={{textAlign: "center"}}
                  className=" dropdown-ssk"
                  onClick={toggleNavbarCollapse}
                >
                  Anahita
                  </DropdownItem>
                  </Link>
                  
                        
                  <Link to='/vehicles/varun' style={{color: 'black'}} className="dropdown-ssk">
                  <DropdownItem
                  // href="#pablo"
                  // onClick={e => e.preventDefault()}
                  style={{textAlign: "center"}}
                  className="dropdown-ssk"
                  onClick={toggleNavbarCollapse}
                >
                  Varun
                  </DropdownItem>
                  </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className={props.activePage==="/blogs" ? "navbar-content active" : "navbar-content"} to="/blogs" tag={Link}>
                Blogs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={props.activePage==="/contact-us" ? "navbar-content active" : "navbar-content"} to="/contact-us" tag={Link}>
                Contact Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/auviitk"
                target="_blank"
                title="Like us on Facebook"
                style={{textAlign: "center"}}
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                data-placement="bottom"
                href="https://github.com/AUV-IITK"
                target="_blank"
                title="Star on GitHub"
                style={{textAlign: "center"}}
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  
    </div>
  );
}

export default ExamplesNavbar;
