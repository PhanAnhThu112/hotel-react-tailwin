import React from "react";

import LogoWhite from '../assets/img/logo-white.svg';

const Footerhome = () => {
  return(
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-white flex justify-between items-center">
        <a href="/">
          <img src={LogoWhite} alt=''/>
        </a>
        Copyright &copy; 2022. All rights reserved.

      </div>

    </footer>

  )
};

export default Footerhome;
