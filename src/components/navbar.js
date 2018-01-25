import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const Navbar = () => {
  return (

    <nav className="navbar navbar-light bg-faded">
      <ul>
        <li className="nav-item"><a href='https://github.com/camawjones'><img className="icons" src='/assets/images/github-pink-icon.png'/></a></li>
        <li className="nav-item"><a href='http://bit.ly/2CA8Fkz'><img className="icons" src='/assets/images/linkedin-icon-pink.png'/></a></li>
        <li className="nav-item"><a href='https://twitter.com/camawjones'><img className="icons" src='/assets/images/twitter-icon.png'/></a></li>
        <li className="nav-item"><a href='https://instagram.com/cameronjoneshq/'><img className="icons" src='/assets/images/instagram-icon-pink.png'/></a></li>
      </ul>
    </nav>

  );
};

export default withRouter(Navbar);
