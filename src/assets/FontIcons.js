import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEnvelope, faClock, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';

const LogoIcon = <FontAwesomeIcon icon={faHeart} size="2x" />;
const LogOutIcon = <FontAwesomeIcon icon={faSignOutAlt} size="1x" />;
const HomeIcon = <FontAwesomeIcon icon={faHome} size="lg" />;
const MailIcon = <FontAwesomeIcon icon={faEnvelope} size="lg" />;
const ClockIcon = <FontAwesomeIcon icon={faClock} size="lg" />;
const CalendarIcon = <FontAwesomeIcon icon={faCalendar} size="lg" />;
const SearchIcon = <FontAwesomeIcon icon={faSearch} size="lg" />;

export { LogoIcon, LogOutIcon, HomeIcon, MailIcon, ClockIcon, CalendarIcon, SearchIcon };
