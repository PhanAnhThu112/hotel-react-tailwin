import React, { useState, useEffect } from 'react';
import LogoDark from '../assets/img/logo-dark.svg';
import { FaUser } from 'react-icons/fa'; // Import the login icon
import { Link } from 'react-router-dom';

const Headerservice= () => {
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
    <header className={`${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed top-0 z-50 w-full transition-all duration-300`}>
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0 mt-6">
        <a href='/'>{header ? <img className='w-[160px]' src={LogoDark} alt="Dark Logo" /> : <img className='w-[160px]' src={LogoDark} alt="White Logo" />}</a>
        <nav className={`${header ? 'text-primary' : 'text-black'} flex gap-x-4 font-tertiary text-[15px] items-center uppercase lg:gap-x-8`}>
        <Link to="/home" className='hover:text-accent text-xl transition'>Home</Link>
        <Link to="/about" className='hover:text-accent text-xl transition'>About </Link>
          <a href='/room' className='hover:text-accent text-xl transition'>Rooms</a>
          <Link to="/service" className='hover:text-accent text-xl transition'>Service</Link>
          <Link to="/contact" className='hover:text-accent text-xl transition'>Contact</Link>
          <div className="flex items-center hover:text-accent text-xl transition">
            <Link to="/signin" className="flex items-center">
              <FaUser className=''/> {/* Login icon */}
            </Link>
            {/* Add the logout icon here when needed */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Headerservice;

