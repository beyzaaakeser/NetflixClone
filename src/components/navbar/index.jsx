import { useState } from 'react';
import './navbar.scss';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotifications, IoMdArrowDropdown } from 'react-icons/io';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="container">
        <div className="left">
          <img src="/logo1.png" alt="Netflix Logo" />
          <span>HomePage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>MyList</span>
        </div>
        <div className="right">
          <FiSearch className="icon" />
          <span>KID</span>
          <IoMdNotifications className="icon" />
          <img src="/man.webp" alt="" />
          <div className="profile">
            <IoMdArrowDropdown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
