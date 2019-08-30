import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Logo = <FontAwesomeIcon icon={faHeart} size="2x" />;
const LogOut = <FontAwesomeIcon icon={faSignOutAlt} size="1x" />;

const Styles = styled.div`
  .navbar {
    background-color: var(--color-alt-main);
    top: 0;
    left: 0;
    width: var(--sidebar-width);
    height: 100vh;

    a.nav-link {
      color: var(--color-text);

      &:hover {
        color: var(--secondary);
      }
    }
  }
`;

const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="d-flex flex-column position-fixed">
      <Navbar.Brand href="/">{Logo}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="ml-auto" className="d-flex flex-column justify-content-center">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
      </Navbar.Collapse>
      <Navbar.Brand href="/">{LogOut}</Navbar.Brand>
    </Navbar>
  </Styles>
);
export default NavigationBar;
