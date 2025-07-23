import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 ${scrolled ? 'navbar-scrolled' : ''}`}
      bg="light"
      variant="light"
    >
      <Container>
        {isHome ? (
  <ScrollLink
    to="home"
    smooth={true}
    duration={300}
    offset={-50}
    className="navbar-brand fw-bold text-primary fs-4"
    style={{ cursor: 'pointer' }}
  >
    SmileCare
  </ScrollLink>
) : (
  <Navbar.Brand as={Link} to="/" className="fw-bold text-primary fs-4">
    SmileCare
  </Navbar.Brand>
)}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            {isHome ? (
              <>
                <Nav.Link
                  as={ScrollLink}
                  to="home"
                  smooth={true}
                  duration={300}
                  offset={-50}
                  className="mx-2"
                  style={{ cursor: 'pointer' }} 
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  as={ScrollLink}
                  to="doctors"
                  smooth={true}
                  duration={300}
                  offset={-50}
                  className="mx-2"
                  style={{ cursor: 'pointer' }} 
                >
                  Doctors
                </Nav.Link>
                <Nav.Link
                  as={ScrollLink}
                  to="testimonials"
                  smooth={true}
                  duration={300}
                  offset={-50}
                  className="mx-2"
                  style={{ cursor: 'pointer' }} 
                >
                  Testimonials
                </Nav.Link>
                <Nav.Link
                  as={ScrollLink}
                  to="contact"
                  smooth={true}
                  duration={300}
                  offset={-50}
                  className="mx-2"
                  style={{ cursor: 'pointer' }} 
                >
                  Contact
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/" className="mx-2">
                Back to Home
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/login" className="mx-2">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="mx-2">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
