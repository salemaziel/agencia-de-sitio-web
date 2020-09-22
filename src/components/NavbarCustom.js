import React, { useState, useEffect } from "react";
import { Link, navigateTo } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from 'react-bootstrap/NavDropdown';

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import SideNav from "react-simple-sidenav";

import navStyles from './navbar.module.css'



//then


const NavbarCustom = (props) => {
  const [showNav, setShowNav] = useState();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []); 

  return (
    <>
    <Navbar fixed bg={scroll ? 'dark' : ''} variant="dark" expand="lg" className={navStyles.headerNavbar}>
      <Container>
        <Nav.Item to="/">
          <Navbar.Brand as={Link} to="/">
            <img
              className="d-inline-block align-top"
              src="https://res.cloudinary.com/dexdumfqy/image/upload/v1600726838/rbl-art-designs/logo-idea1-250px_cnhe7j.png"
              alt="Logo"
              height="60"
            ></img>
          </Navbar.Brand>
        </Nav.Item>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0"
          onClick={() => setShowNav(true)}
        ></Navbar.Toggle>
        <Navbar id="navbar-nav" className="justify-content-end" style={{    display: 'flex!important',
    flexBasis: 'auto',
    flexGrow: '1',
    alignItems: 'center',
    }}>
          <Nav
            className="ml-auto"
            defaultActiveKey="/"
            onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
          >
            <Nav.Item to="/about" className={navStyles.navItem}>
              <Nav.Link as={Link} to="/about" active={false}>
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item to="/faq" className={navStyles.navItem}>
              <Nav.Link as={Link} to="/faq" active={false}>
                FAQ
              </Nav.Link>
            </Nav.Item>

            <Nav.Item to="/contact" className={navStyles.navItem}>
              <Nav.Link as={Link} to="/contact" active={false}>
                Contact
              </Nav.Link>
            </Nav.Item>

            <NavDropdown
                  as={Link}
                  href="/about"
                  to="/about"
                  eventKey="more"
                  title="More"
                  id="nav-dropdown-about"
                  className={navStyles.navItem}
                >
                  <NavDropdown.Item eventKey="/">
                    {' '}
                    Dropdown Item 1{' '}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/">
                  Dropdown Item 2
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/">
                  Dropdown Item 3
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="/">
                  Dropdown Item 4
                  </NavDropdown.Item>
                </NavDropdown>

          </Nav>
          <Nav className="mr-1">
            {/*{auth.user && (
          <Nav.Dropdown id="dropdown" title="Account" alignRight={true}>
            <Nav.Item to="/dashboard">
              <Nav.Dropdown.Item active={false}>Dashboard</Nav.Dropdown.Item>
            </Nav.Item>

            <Nav.Item to="/settings/general">
              <Nav.Dropdown.Item active={false}>Settings</Nav.Dropdown.Item>
            </Nav.Item>


            <Nav.Item to="/auth/signout">
              <Nav.Dropdown.Item
                active={false}
                onClick={(e) => {
                  e.preventDefault();
                  auth.signout();
                }}
              >
                Sign out
              </Nav.Dropdown.Item>
            </Nav.Item>
          </Nav.Dropdown>
        )}

        {!auth.user && (
          <Nav.Item to={SIGN_IN}>
            <Nav.Link active={false}>Login</Nav.Link>
          </Nav.Item>
        )}
	*/}
          </Nav>

          {/*
	{!auth.user && (*/}
        {/*<Button
          className={navStyles.CTAButton}
          variant=""
          onClick={() => {
            navigateTo("/contact");
          }}
        >
          Contact
        </Button>
       {/* )}
	*/}
        </Navbar>
        <SideNav
          openFromRight={true}
          title={
            <div
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              {/*
		<img 
		  src=""
		  alt=""
		  style={{
			margin: 'auto'	
		  }} />
		*/}
            </div>
          }
          titleStyle={{
            background: "inherit",
            backgroundColor: "transparent",
            color: "black",
            margin: "auto",
          }}
          items={[
            <Link rel="preload" className="" to="/">
              Home
            </Link>,
            <Link rel="preload" className="" to="/about">
              About
            </Link>,
            <Link rel="preload" className="" to="/faq">
              FAQ
            </Link>,
            <Link rel="preload" className="" to="/contact">
              Contact
            </Link>,
          ]}
          itemStyle={{
            background: "transparent!important",
            backgroundColor: "transparent!important",
            color: "#000",
            fontSize: "1.2rem",
            padding: "10px 0",
            textAlign: "center",
            margin: "1rem auto",
          }}
          navStyle={{
            width: "70%",
            background: "rgba(255,255,255,0.9)",
            color: "inherit",
            maxHeight: "100vh",
          }}
          showNav={showNav}
          onHideNav={() => setShowNav(false)}
        />
      </Container>
    </Navbar>
    </>
  );
};

export default NavbarCustom;
