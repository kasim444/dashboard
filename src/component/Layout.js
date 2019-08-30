import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: var(--sidebar-width) auto;
`;
const Layout = ({ children }) => <Container>{children}</Container>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
