import React from 'react';
import './NavbarInsure.css';
import { RiKey2Line } from 'react-icons/ri'; 
import Spinner from '../../utils/Spinner';
import {Link} from 'react-router-dom'


function NavbarInsure() {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>
          <Spinner />
        </div>
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{listStyleType: 'none'}}>
            <a href='/'>Home</a>
            <Link className="dropdown">
              <a className="dropdown-toggle" href="#services" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Services
              </a>
              <div className="dropdown-menu" aria-labelledby="servicesDropdown"> 
                <span className="dropdown-item disabled">Service 1</span>
                <span className="dropdown-item disabled">Service 2</span>
                <span className="dropdown-item disabled">Service 3</span>
              </div>
            </Link>
            <a href='#aboutus'>About us</a>
            <a href='#blog'>Blog</a>
            <a href='#aboutus'>Career</a>
          </ul>
        </div>
        <div className='buttonpad'>
        <button className='button'>Contact us</button> 
        <p className='login-text'><RiKey2Line className='key-icon' /> Login</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarInsure;
