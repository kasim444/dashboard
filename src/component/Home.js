/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import {
  BellIcon,
  ArrowRightIcon,
  GrapghIcon,
  CloudIcon,
  TickIcon,
} from '../assets/font-icons/FontIcons';
import { device } from '../ui/device';

const Home = () => {
  return (
    <Content>
      <div id="search">
        <input placeholder="Search" />
        <span>{BellIcon}</span>
      </div>
      <div id="price">
        <div className="sloganWrapper">
          <h1>What is SMART Planning?</h1>
          <p className="text-muted pr-5">
            Business goals should always be Spesific, Measurable and Achievable.
          </p>
          <a href="#">
            learn more
            {ArrowRightIcon}
          </a>
        </div>
        <div className="sBoxWrapper">
          <div className="sBox" id="graphBox">
            {GrapghIcon}
            <span> Graph </span>
          </div>
          <div className="sBox" id="cloudBox">
            {CloudIcon}
            <span> Cloud </span>
          </div>
        </div>
      </div>
      <div id="datePicker">
        <div>
          <div>
            5-11 August
            <span>
              {'<'}
              {'>'}
            </span>
          </div>
          <div>
            <select>
              <option>Day</option>
              <option>Week</option>
              <option>Year</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <span>Mo</span>
            <span>5</span>
          </div>
          <div>
            <span>Mo</span>
            <span>5</span>
          </div>
          <div>
            <span>Mo</span>
            <span>5</span>
          </div>
          <div>
            <span>Mo</span>
            <span>5</span>
          </div>
          <div>
            <span>Mo</span>
            <span>5</span>
          </div>
          <div>
            <span>Mo</span>
            <span>5</span>
          </div>
          <div>
            <span>Mo</span>
            <span>5</span>
          </div>
        </div>
      </div>
      <div id="graph">
        <div className="progressBox">
          <div>
            <h6>Goals achieved</h6>
            <ul>
              <li>
                {TickIcon}
                Market share
              </li>
              <li>
                {TickIcon}
                Customer service
              </li>
              <li>
                {TickIcon}
                Increase efficiency
              </li>
            </ul>
          </div>
          <img src="" width="100" alt="SMART goals achieved icon" />
        </div>
        <div className="progressBox">
          <div>
            <h6>SMART progress</h6>
            32.1% Archived Active
          </div>
        </div>
      </div>
      <div id="profile">
        <img width="30" alt="SMART avatar" />
        <span>Boniface Esanji</span>
      </div>
      <div id="getStarted">
        <img src="" width="100%" height="300px" alt="SMART slogan" />
        <h3>Welcome to SMART</h3>
        <p>Goal setting and goal management software for high achievers.</p>
        <a href="#">Get Started</a>
      </div>
    </Content>
  );
};

const Content = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 10% 25% 25% 35%;
  grid-template-areas:
    'search profile'
    'price getStarted'
    'datePicker getStarted'
    'graph getStarted';
  padding: 20px 0px 20px 50px;
  column-gap: 100px;
  @media ${device.laptop} {
    row-gap: 5px;
  }
  @media ${device.desktop} {
    row-gap: 15px;
  }

  #search {
    grid-area: search;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    input {
      border: none;
      border-radius: 35px;
      background-color: var(--color-bg-grey);
      padding: 10px 40px;

      &:focus {
        outline: none;
      }
    }
  }

  #price {
    grid-area: price;
    background-color: var(--color-bg-grey);
    border-radius: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    @media ${device.laptop} {
      padding: 30px;
    }

    div.sloganWrapper {
      h1 {
        font-size: 2rem;
      }
    }
    div.sBoxWrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      div#graphBox {
        background-color: var(--color-red);
      }

      div#cloudBox {
        background-color: var(--color-blue);
      }
      div.sBox {
        color: white;
        border-radius: 30px;
        cursor: pointer;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 15px;
        @media ${device.laptop} {
          padding: 50px 20px;
        }
        @media ${device.desktop} {
          padding: 75px 20px;
        }
      }
    }
  }

  #datePicker {
    grid-area: datePicker;
    display: flex;
    flex-direction: column;
    align-items: normal;
    justify-content: space-around;

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      &:nth-child(2) {
        border-top: 1px solid lightgrey;
        padding: 25px;
        border-bottom: 1px solid lightgrey;
      }
      div:nth-child(2) {
        display: flex;
        flex-direction: column;
      }
    }
  }

  #graph {
    grid-area: graph;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .progressBox {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 30px;
      background-color: var(--color-bg-grey);
      border-radius: 30px;

      ul li {
        list-style: none;
      }
    }
  }

  #profile {
    grid-area: profile;
  }

  #getStarted {
    grid-area: getStarted;
    a {
      padding: 15px 20px;
      background-color: var(--color-red);
      color: white;
      border-radius: 25px;
      transition: all ease 0.5s;
      &:hover {
        background-color: var(--color-main);
      }
    }
  }
`;

export default Home;
