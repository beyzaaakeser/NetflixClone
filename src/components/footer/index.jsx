import React from 'react';
import './footer.scss';

const Footer = () => {
  const footerData = [
    ['FAQ', 'Investor Relations', 'Terms of Use', 'Contact Us'],
    ['Help Center', 'Job Opportunities', 'Privacy', 'Speed Test'],
    ['Account', 'Redeem Gift Card', 'Cookie Preferences', 'Legal Terms'],
    [
      'Media Center',
      'Ways to Watch',
      'Corporate Information',
      'Only on Netflix',
    ],
  ];

  return (
    <footer className=''>
      <div className="footer-container">
        <div className="questions">
          Have questions? Call <span>0850-390-7444</span>
        </div>

        <div className="footer">
          {footerData.map((links, index) => (
            <FooterItem key={index} links={links} />
          ))}
        </div>

        <select className="footer-select">
          <option value="" selected>
            Turkish
          </option>
          <option value="">English</option>
        </select>

        <div className="footer-end">Netflix</div>
        
      </div>
    </footer>
  );
};

export default Footer;

const FooterItem = ({ links }) => {
  return (
    <div className="footer-item">
      {links.map((link, index) => (
        <a key={index} href="#">
          {link}
        </a>
      ))}
    </div>
  );
};
