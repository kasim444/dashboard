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
  faPizzaSlice,
  faCopyright,
} from '@fortawesome/free-solid-svg-icons';

const LogoIcon = <FontAwesomeIcon icon={faHeart} size="2x" />;
const LogOutIcon = <FontAwesomeIcon icon={faSignOutAlt} size="1x" />;
const HomeIcon = <FontAwesomeIcon icon={faHome} size="lg" />;
const MailIcon = <FontAwesomeIcon icon={faEnvelope} size="lg" />;
const ClockIcon = <FontAwesomeIcon icon={faClock} size="lg" />;
const CalendarIcon = <FontAwesomeIcon icon={faCalendar} size="lg" />;
const SearchIcon = <FontAwesomeIcon icon={faSearch} size="lg" />;
const BellIcon = <FontAwesomeIcon icon={faBell} size="lg" />;
const ArrowRightIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} size="lg" />;
const GrapghIcon = <FontAwesomeIcon icon={faPizzaSlice} size="lg" />;
const CloudIcon = <FontAwesomeIcon icon={faCloud} size="lg" />;
const TickIcon = <FontAwesomeIcon icon={faCopyright} size="lg" />;

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
  TickIcon,
};
