// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import '../style/nevbar.css';
// import { assets } from '../assets/assets.js';

// function Nevbar() {
//   const navigate = useNavigate();
//   const [isScrolled, setIsScrolled] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (

//     <div className={`nevbar ${isScrolled ? 'white' : 'transparent'}`}>
//       <div className='logo'>
//         <img
//           src={assets.logo}
//           alt="logo"
//           className={isScrolled ? 'invert-on':'invert-off'}
//         />
//       </div>

//       <div className="nevoption">
//         <ul>
          
//           <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
//           <li><NavLink to="/room" className={({ isActive }) => isActive ? 'active' : ''}>Hotels</NavLink></li>

//           <li><NavLink to="/facility" className={({ isActive }) => isActive ? 'active' : ''}>Facility</NavLink></li>
//           <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
//           <li><NavLink to="/offers" className={({ isActive }) => isActive ? 'active' : ''}>Offers</NavLink></li>
//         </ul>
//       </div>

//       <div className="button">
//         <img
//           src={assets.searchIcon}
//           alt="search"
//           className={isScrolled ?  'invert-on':'invert-off'}
//         />
//         <img
//           src={assets.userIcon}
//           alt="user"
//           className={isScrolled ?  'invert-on':'invert-off'}
//         />
//         <button
//           type="button"
//           onClick={() => navigate('/login')}
//           className='light-btn'
//         >
//           Log In
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Nevbar;



import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import '../style/nevbar.css';
import { assets } from '../assets/assets.js';

function Nevbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navbarClass = isHomePage && !isScrolled ? "transparent" : "white";

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className={`nevbar ${navbarClass}`}>
        <div className='logo'>
          <img
            src={assets.logo}
            alt="logo"
            className={navbarClass === "white" ? "invert-on" : "invert-off"}
          />
        </div>

        <div className="nevoption">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/room">Hotels</NavLink></li>
            <li><NavLink to="/facility">Facility</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/offers">Offers</NavLink></li>
          </ul>
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          <img
            src={menuOpen ? assets.closeMenu : assets.menuIcon}
            alt="menu"
          />
        </button>

        <div className="button">
          <img
            src={assets.searchIcon}
            alt="search"
            className={navbarClass === "white" ? "invert-on" : "invert-off"}
          />
          <img
            src={assets.userIcon}
            alt="user"
            className={navbarClass === "white" ? "invert-on" : "invert-off"}
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

      <div className={`sidebar-overlay ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)} />

      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src={assets.logo} alt="logo" />
          <button
            type="button"
            className="close-sidebar"
            onClick={toggleMenu}
            aria-label="Close sidebar"
          >
            <img src={assets.closeMenu} alt="close menu" />
          </button>
        </div>
        <ul>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/room" onClick={() => setMenuOpen(false)}>Hotels</NavLink></li>
          <li><NavLink to="/facility" onClick={() => setMenuOpen(false)}>Facility</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          <li><NavLink to="/offers" onClick={() => setMenuOpen(false)}>Offers</NavLink></li>
        </ul>
        <button
          type="button"
          onClick={() => {
            setMenuOpen(false);
            navigate('/login');
          }}
          className='light-btn sidebar-login'
        >
          Log In
        </button>
      </aside>
    </>
  );
}

export default Nevbar;