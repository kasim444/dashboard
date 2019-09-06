import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faEnvelope,
  faClock,
  faCalendar,
  faBell,
  faArrowAltCircleRight,
} from '@fortawesome/free-regular-svg-icons';

import {
  faSignOutAlt,
  faHome,
  faSearch,
  faCloud,
  faChartPie,
  faAngleLeft,
  faAngleRight,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

const LogoIcon = <FontAwesomeIcon icon={faHeart} size="2x" />;
const LogOutIcon = <FontAwesomeIcon icon={faSignOutAlt} size="1x" />;
const HomeIcon = <FontAwesomeIcon icon={faHome} size="2x" />;
const MailIcon = <FontAwesomeIcon icon={faEnvelope} size="2x" />;
const ClockIcon = <FontAwesomeIcon icon={faClock} size="2x" />;
const CalendarIcon = <FontAwesomeIcon icon={faCalendar} size="2x" />;
const SearchIcon = <FontAwesomeIcon icon={faSearch} size="lg" />;
const BellIcon = <FontAwesomeIcon icon={faBell} size="lg" />;
const ArrowRightIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} size="lg" />;
const GrapghIcon = <FontAwesomeIcon icon={faChartPie} size="lg" />;
const CloudIcon = <FontAwesomeIcon icon={faCloud} size="lg" />;
const CheckIcon = <FontAwesomeIcon icon={faCheck} size="lg" />;
const LeftArrowIcon = <FontAwesomeIcon icon={faAngleLeft} size="lg" />;
const RightArrowIcon = <FontAwesomeIcon icon={faAngleRight} size="lg" />;

export {
  LogoIcon,
  LogOutIcon,
  HomeIcon,
  MailIcon,
  ClockIcon,
  CalendarIcon,
  SearchIcon,
  BellIcon,
  ArrowRightIcon,
  GrapghIcon,
  CloudIcon,
  CheckIcon,
  LeftArrowIcon,
  RightArrowIcon,
};
