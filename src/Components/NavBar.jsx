import React, { useState, useRef, useEffect } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [userInteracting, setUserInteracting] = useState(false);
  const navbarRef = useRef(null);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleNavItemClick = () => {
    setUserInteracting(true);
    setTimeout(() => {
      setUserInteracting(false);
    }, 500);
  };

  const handleMouseEnter = () => {
    setUserInteracting(true);
  };

  const handleMouseLeave = () => {
    setUserInteracting(false);
  };

  useEffect(() => {
    let timer;
    if (!userInteracting && !collapsed) {
      timer = setTimeout(() => {
        setCollapsed(true);
      }, 3000); // 3 seconds
    }
    return () => clearTimeout(timer); // Cleanup on unmount or change
  }, [userInteracting, collapsed]);

  return (
    <Navbar 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      ref={navbarRef} 
      collapseOnSelect 
      expand="lg" 
      bg="dark" 
      variant="dark" 
      fixed="top" 
      expanded={!collapsed}
      className={`navbar ${collapsed ? 'navbar--collapsed' : 'navbar--expanded'} ${userInteracting ? 'navbar--interacting' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar__brand">ASV</Navbar.Brand> 
        <Navbar.Toggle onClick={handleCollapse} aria-controls="responsive-navbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar__nav me-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              onClick={handleNavItemClick} 
              className="navbar__link"
            >
              Home
            </Nav.Link> 
            <Nav.Link 
              as={Link} 
              to="/about" 
              onClick={handleNavItemClick} 
              className="navbar__link"
            >
              About Me
            </Nav.Link> 
            <Nav.Link 
              as={Link} 
              to="/rating" 
              onClick={handleNavItemClick} 
              className="navbar__link"
            >
              Rating
            </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
