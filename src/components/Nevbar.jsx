import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../style/nevbar.css';
import { assets } from '../assets/assets.js';

function Nevbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div className={`nevbar ${isScrolled ? 'white' : 'transparent'}`}>
      <div className='logo'>
        <img
          src={assets.logo}
          alt="logo"
          className={isScrolled ? 'invert-on':'invert-off'}
        />
      </div>

      <div className="nevoption">
        <ul>
          
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/room" className={({ isActive }) => isActive ? 'active' : ''}>Hotels</NavLink></li>

          <li><NavLink to="/facility" className={({ isActive }) => isActive ? 'active' : ''}>Facility</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
          <li><NavLink to="/offers" className={({ isActive }) => isActive ? 'active' : ''}>Offers</NavLink></li>
        </ul>
      </div>

      <div className="button">
        <img
          src={assets.searchIcon}
          alt="search"
          className={isScrolled ?  'invert-on':'invert-off'}
        />
        <img
          src={assets.userIcon}
          alt="user"
          className={isScrolled ?  'invert-on':'invert-off'}
        />
        <button
          type="button"
          onClick={() => navigate('/login')}
          className='light-btn'
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Nevbar;
