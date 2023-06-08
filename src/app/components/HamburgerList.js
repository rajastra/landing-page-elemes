import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerList = () => {
  return (
    <div className='grid grid-cols-3 text-center lg:hidden'>
      <div>
        <FontAwesomeIcon icon={faBars} className='text-[#757575] text-[39px]' />
        <p>Home</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faBars} className='text-[#757575] text-[39px]' />
        <p>Promotions</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faBars} className='text-[#757575] text-[39px]' />
        <p>Others</p>
      </div>
    </div>
  );
};

export default HamburgerList;
