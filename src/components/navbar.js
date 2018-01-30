import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import githubIcon from '../assets/images/github-pink-icon.png';
import linkedinIcon from '../assets/images/linkedin-icon-pink.png';
import twitterIcon from '../assets/images/twitter-icon.png';
import instagramIcon from '../assets/images/instagram-icon-pink.png';


const Navbar = () => {
  return (

    <nav className="navbar navbar-light bg-faded">
      <ul className="center-nav">
        <li className="nav-item"><a href='https://github.com/camawjones'><img className="icons" alt="github" src={githubIcon}/></a></li>
        <li className="nav-item"><a href='http://bit.ly/2CA8Fkz'><img className="icons" alt="linkedin" src={linkedinIcon}/></a></li>
        <li className="nav-item"><a href='https://twitter.com/camawjones'><img className="icons" alt="twitter" src={twitterIcon}/></a></li>
        <li className="nav-item"><a href='https://instagram.com/cameronjoneshq/'><img className="icons" alt="instagram" src={instagramIcon}/></a></li>
      </ul>
    </nav>

  );
};

export default withRouter(Navbar);
