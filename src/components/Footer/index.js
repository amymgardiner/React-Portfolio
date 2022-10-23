import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/amymgardiner" target="blank">
            <li className="grow">
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/amymgardiner/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/amymgardiner/" target="blank">
            <li>
              <FaInstagram />
            </li>
          </a>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
