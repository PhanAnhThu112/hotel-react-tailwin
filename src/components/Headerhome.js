import React, { useState, useEffect } from 'react';
import LogoWhite from '../assets/img/logo-white.svg';
import LogoDark from '../assets/img/logo-dark.svg';
import { FaUser } from 'react-icons/fa'; // Import the login icon
import { Link } from 'react-router-dom';

const Headerhome = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    
  }, []);

  return (
    <header className={`${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-300`}>
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0 mt-6">
        <a href='/'>{header ? <img className='w-[160px]' src={LogoDark} alt="Dark Logo" /> : <img className='w-[160px]' src={LogoWhite} alt="White Logo" />}</a>
        <nav className={`${header ? 'text-primary' : 'text-white'} flex gap-x-4 font-tertiary text-[15px] items-center uppercase lg:gap-x-8`}>
          <a href='#Home' className='hover:text-accent transition'>Home</a>
          <a href='#Rooms' className='hover:text-accent transition'>Rooms</a>
          <a href='#Restaurant' className='hover:text-accent transition'>Restaurant</a>
          <a href='#Spa' className='hover:text-accent transition'>Spa</a>
          <a href='#Contact' className='hover:text-accent transition'>Contact</a>
          <div className="flex items-center hover:text-accent transition px-10">
            <Link to="/signin" className="flex items-center">
              <FaUser className="mr-2" /> {/* Login icon */}
            </Link>
            {/* Add the logout icon here when needed */}
          </div>
         
        </nav>
      </div>
    </header>
  );
};

export default Headerhome;

