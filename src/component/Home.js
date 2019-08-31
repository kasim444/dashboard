import React from 'react';
import styled from 'styled-components';
import { Form, InputGroup } from 'react-bootstrap';
import { SearchIcon } from '../assets/FontIcons';

const Home = () => {
  return (
    <Content>
      <div id="search">
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>{SearchIcon}</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control type="text" placeholder="Search here.." />
        </InputGroup>
      </div>
      <div id="price">What is SMART Planning?</div>
      <div id="datePicker">Datepicker</div>
      <div id="graph">
        <div>Goals achieved</div>
        <div>SMART progress</div>
      </div>
      <div id="profile">Profile</div>
      <div id="getStarted">Welcome to SMART</div>
    </Content>
  );
};

const Content = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 13% 21% 25% 32%;
  grid-template-areas:
    'search profile'
    'price getStarted'
    'datePicker getStarted'
    'graph getStarted';
  grid-gap: 20px;
  padding: 20px 0px 20px 20px;

  #search {
    grid-area: search;

    
  }

  #price {
    grid-area: price;
  }

  #datePicker {
    grid-area: datePicker;
  }

  #graph {
    grid-area: graph;
  }

  #profile {
    grid-area: profile;
  }

  #getStarted {
    grid-area: getStarted;
  }
`;

export default Home;
