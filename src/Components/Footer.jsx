import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import '../Styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer-container fixed-bottom py-3">
      <div className="container text-center">
        <a href="https://www.linkedin.com/" className="text-dark">
          <FaLinkedin className="footer-icon" />
        </a>
        <a href="https://github.com/andr0genas/Resume.git" className="text-dark">
          <FaGithub className="footer-icon" />
        </a>
        <a href="https://www.facebook.com/" className="text-dark">
          <FaFacebook className="footer-icon" />
        </a>
        <div className="footer-text mt-2">
          &copy; {new Date().getFullYear()} Andrius Simonas Vitkunas
        </div>
      </div>
    </footer>
  );
};

export default Footer;