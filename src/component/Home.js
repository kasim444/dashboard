/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {
  BellIcon,
  ArrowRightIcon,
  GrapghIcon,
  CloudIcon,
  CheckIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from '../assets/font-icons/FontIcons';
import { device } from '../ui/device';
import humanIcon from '../assets/img/human-illus.png';
import humanIconRight from '../assets/img/human-illlus-2.png';
import avatar from '../assets/img/avatar.png';

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
        <div className="p-1">
          <div className="d-flex flex-row align-items-center justify-content-around w-25">
            <span>5-11 August</span>
            <a className="datePicker d-flex align-items-center">
              {LeftArrowIcon}
              {RightArrowIcon}
            </a>
          </div>
          <div>
            <select className="form-control" defaultValue="2">
              <option value="1">Day</option>
              <option value="2">Week</option>
              <option value="3">Year</option>
            </select>
          </div>
        </div>
        <div className="text-muted">
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
          <div className="inProgress">In Progress</div>
        </div>
      </div>
      <div id="graph">
        <div className="progressBox">
          <div>
            <h6>
              <b>Goals achieved</b>
            </h6>
            <ul className="text-muted">
              <li>
                <span className="fa-li">{CheckIcon}</span>
                Market share
              </li>
              <li>
                <span className="fa-li">{CheckIcon}</span>
                Customer service
              </li>
              <li>
                <span className="fa-li">{CheckIcon}</span>
                Increase efficiency
              </li>
            </ul>
          </div>
          <div>
            <img src={humanIcon} alt="SMART goals achieved icon" />
          </div>
        </div>
        <div className="progressBox">
          <div>
            <img src={humanIcon} alt="SMART goals achieved icon" />
          </div>
          <div className="d-flex flex-column justify-content-around">
            <h6>SMART progress</h6>
            <div>
              32.1%
              <ProgressBar variant="warning" now={32} />
            </div>
            <div className="smartProgress">
              <span>Archived</span>
              <span>Active</span>
            </div>
          </div>
        </div>
      </div>
      <div id="profile" className="d-flex align-items-center">
        <img src={avatar} width="50" alt="SMART avatar" />
        <span>Boniface Esanji</span>
      </div>
      <div id="getStarted">
        <div>
          <img src={humanIconRight} width="100%" height="350px" alt="SMART slogan" />
        </div>
        <div className="d-flex flex-column align-items-start justify-content-around mt-4 pt-3">
          <h3>Welcome to SMART</h3>
          <p>Goal setting and goal management software for high achievers.</p>
          <a href="#">Get Started</a>
        </div>
      </div>
    </Content>
  );
};

const Content = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 10% 33% 25% 32%;
  grid-template-areas:
    'search profile'
    'price getStarted'
    'datePicker getStarted'
    'graph getStarted';
  padding: 0px 0px 20px 50px;
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
      svg {
        padding-left: 10px;
      }
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

    .datePicker {
      padding: 2px 15px;
      background-color: var(--color-red);
      color: white;
      border-radius: 30px;
      cursor: pointer;

      svg:nth-child(1) {
        margin-right: 10px;
      }
    }

    .inProgress {
      padding: 8px 13px;
      background-color: white;
      border-radius: 30px;
      color: var(--color-blue);
      border: 1px solid var(--color-blue);
      transition: all 0.5s ease;
      cursor: pointer;

      &:hover {
        background-color: var(--color-blue);
        color: white;
      }
    }
    select {
      border-radius: 30px;
      padding: 0 20px;
      border: 1px solid var(--color-text);
    }

    & > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      &:nth-child(2) {
        border-top: 1px solid lightgrey;
        padding: 10px 25px;
        border-bottom: 1px solid lightgrey;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
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
      position: relative;
      display: grid;
      grid-template-columns: 2fr 1fr;
      column-gap: 10px;
      padding: 30px;
      background-color: var(--color-bg-grey);
      border-radius: 30px;
      min-height: 205px;

      &:last-child {
        background-color: var(--color-text);
        color: white;
        grid-template-columns: 0.8fr 1fr;

        .progress {
          height: 0.5rem;
        }

        img {
          transform: none;
          left: 0;
        }

        .smartProgress {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 10px;
        }
      }

      img {
        height: 180px;
        position: absolute;
        transform: scaleX(-1);
        top: -25px;
        right: 0;
      }

      ul li {
        list-style: none;
        position: relative;
        padding-top: 10px;

        span svg {
          color: var(--color-red);
        }
      }
    }
  }

  #profile {
    grid-area: profile;

    img {
      margin-right: 10px;
      border-radius: 15px;
    }
  }

  #getStarted {
    grid-area: getStarted;

    div:first-child {
      background-color: var(--color-bg-right-image);
      border-radius: 30px 0 0 30px;
      padding: 20px;
    }
    div:last-child {
      border-top: 0.5px solid ghostwhite;
    }
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
