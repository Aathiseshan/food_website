import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home');
  const { getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();
  const location = useLocation();

  const goHome = () => {
    setMenu('home');
    if (location.pathname === '/') {
      // Already on Home route, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <div className='navbar'>
      <div onClick={goHome} style={{ cursor: 'pointer' }}>
        <img src={assets.logo} alt='' className='logo' />
      </div>

      <ul className='navbar-menu'>
        <li onClick={goHome} className={menu === 'home' ? 'active' : ''}>home</li>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
        <a href='#app-down' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact us</a>
      </ul>

      <div className='navbar-right'>
        <img src={assets.search_icon} alt='' />
        <div className='navbar-search-icon'>
          <div onClick={() => navigate('/cart')} style={{ cursor: 'pointer' }}>
            <img src={assets.basket_icon} alt='' />
            <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
          </div>
        </div>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
