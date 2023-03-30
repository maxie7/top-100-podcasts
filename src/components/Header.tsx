import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

type Props = {
    isLoaded: boolean
};

const Header = ({ isLoaded }: Props) => {
  const loader = () => {
    if (!isLoaded) {
      return (
        <div className="header__loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>
      );
    }
  };

  return (
    <nav className="header">
      <div className="header__section">
        <Link to="/" className="header__link">
          <h2 className="header__link__title">Top-100 Podcasts</h2>
        </Link>
      </div>
      {loader()}
    </nav>
  );
};

export default Header;
