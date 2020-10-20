import React, { useState, useEffect } from "react";
import { Link, navigateTo } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import SideNav from "react-simple-sidenav";

import navStyles from "./navbar.module.css";

import { FaHome } from "react-icons/fa";

//then

const NavbarCustomEN = (props) => {
  const [showNav, setShowNav] = useState();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <Navbar
        fixed
        bg={scroll ? "primary" : ""}
        variant="dark"
        expand="lg"
        className={navStyles.headerNavbar}
      >
        <Container>
          {/*<Nav.Item to="/">
            <Navbar.Brand as={Link} to="/">
              <img
                className="d-inline-block align-top"
                src="https://www.pikpng.com/pngl/m/296-2969618_mexico-round-flag-mexican-flag-backgrounds-for-powerpoint.png"
                alt="Logo"
                height="60"
              ></img>
            </Navbar.Brand>
          </Nav.Item>*/}
          <Navbar.Brand /*as={Link} to="/"*/>
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <img
                  className="d-inline-block align-top"
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601579192/rbl-art-designs/united-states-of-america-flag-3d-round-icon-256_gbffry.png"
                  alt="Logo"
                  height="40"
                ></img>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/">
                  {" "}
                  <img
                    className="d-inline-block align-top"
                    src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601552057/rbl-art-designs/mexico-flag-transparent-100x_zmifmm.png"
                    alt="Logo"
                    height="40"
                  ></img> Espanol
                </Dropdown.Item>
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="border-0"
            onClick={() => setShowNav(true)}
          ></Navbar.Toggle>
          <Navbar
            id="navbar-nav"
            className="justify-content-end NoMobile"
            style={{
              display: "flex",
              flexBasis: "auto",
              flexGrow: "1",
              alignItems: "center",
            }}
          >
            <Nav
              className="ml-auto"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
            >
              <Nav.Item to="/about" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/about" active={false}>
                  Who We Are
                </Nav.Link>
              </Nav.Item>

              {/*<Nav.Item to="/faq" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/faq" active={false}>
                  FAQ
                </Nav.Link>
          </Nav.Item>*/}

              <Nav.Item to="/servicios" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/servicios" active={false}>
                  Services
                </Nav.Link>
              </Nav.Item>

              <Nav.Item to="/contacto" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/contacto" active={false}>
                  Contact
                </Nav.Link>
              </Nav.Item>

              <NavDropdown
                as={Link}
                href="/en/more"
                to="/en/more"
                eventKey="more"
                title="More"
                id="nav-dropdown-about"
                className={navStyles.navItem}
              >
                <NavDropdown.Item eventKey="/#">
                  {" "}
                  Dropdown Item 1{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 2
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 3
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="mr-1"></Nav>
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
              <Link rel="preload" className={navStyles.navItem} to="/">
                <FaHome />
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/about">
                Who We Are
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/contacto">
                Contact
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/servicios">
                Services
              </Link>,
            ]}
            itemStyle={{
              background: "transparent!important",
              backgroundColor: "transparent!important",
              color: "#fff!important",
              fontSize: "1.5rem",
              fontWeight: "500",
              padding: "10px 0",
              textAlign: "center",
              margin: "1rem auto",
            }}
            navStyle={{
              width: "70%",
              background: "linear-gradient(60deg, #543ab7 0%, #00acc1 100%)",
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

export default NavbarCustomEN;
