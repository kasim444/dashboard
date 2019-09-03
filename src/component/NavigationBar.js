/* eslint-disable react/prop-types */
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import {
  LogoIcon,
  LogOutIcon,
  HomeIcon,
  MailIcon,
  ClockIcon,
  CalendarIcon,
} from '../assets/font-icons/FontIcons';

const Routes = [
  {
    href: '/',
    text: 'Home',
    icon: HomeIcon,
  },
  {
    href: '/message',
    text: 'Message',
    icon: MailIcon,
  },
  {
    href: '/history',
    text: 'History',
    icon: ClockIcon,
  },
  {
    href: '/tasks',
    text: 'Tasks',
    icon: CalendarIcon,
  },
];

const NavigationBar = props => {
  const { location } = props;
  return (
    <Styles>
      <Navbar activekey={location.pathname} expand="lg" className="position-fixed">
        <Navbar.Brand href="/">{LogoIcon}</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="ml-auto" className="d-flex flex-column justify-content-center">
          {Routes.map(navlink => (
            <Nav.Item key={navlink.text}>
              <Nav.Link href={navlink.href} active={location.pathname === navlink.href}>
                {location.pathname === navlink.href ? navlink.text : navlink.icon}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Navbar.Collapse>
        <Navbar.Brand href="/">{LogOutIcon}</Navbar.Brand>
      </Navbar>
    </Styles>
  );
};

const Styles = styled.div`
  nav.navbar {
    display: grid;
    grid-template-rows: 90px 1fr 90px;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: var(--color-alt-main);
    width: var(--sidebar-width);
    height: 100vh;

    .navbar-brand {
      margin-right: 0;
    }
    a.nav-link {
      color: var(--color-text);
      margin: 15px auto;
      position: relative;

      &.active {
        font-size: larger;
      }

      &.active::after {
        content: '.';
        font-size: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: -20px;
      }

      &:hover {
        color: var(--secondary);
      }
    }
  }
`;
export default NavigationBar;
