import React from 'react';
import logo from '@/public/elemes-logo.png';
import Image from 'next/image';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faEnvelope,
  faPhone,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='hidden lg:block'>
      <div className='grid grid-cols-4 gap-5 bg-[#F9FFF7] py-10'>
        <div className='flex flex-col gap-5'>
          <Image src={logo} alt='elemes logo' className='w-[270x] h-[36px]' />
          <p className='text-sm text-[#757575]'>
            Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
            Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950
          </p>
          <div className='flex gap-5'>
            <div className='rounded-full text-[#8BAC3E] hover:bg-[#8BAC3E] hover:text-white px-2 py-2 grid place-content-center transition-all cursor-pointer'>
              <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5' />
            </div>
            <div className='rounded-full text-[#8BAC3E] hover:bg-[#8BAC3E] hover:text-white px-2 py-2 grid place-content-center transition-all cursor-pointer'>
              <FontAwesomeIcon icon={faPhone} className='w-5 h-5' />
            </div>
            <div className='rounded-full text-[#8BAC3E] hover:bg-[#8BAC3E] hover:text-white px-2 py-2 grid place-content-center transition-all cursor-pointer'>
              <FontAwesomeIcon icon={faCamera} className='w-5 h-5' />
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h4 className='text-[#333333] text-lg font-medium'>Catagories</h4>
          <ul className='flex flex-col gap-2 text-[#757575] text-sm font-normal'>
            <li>Cupcake</li>
            <li>Pizza</li>
            <li>Kebab</li>
            <li>Salmon</li>
            <li>Dougnut</li>
          </ul>
        </div>
        <div className='flex flex-col gap-5'>
          <h4 className='text-[#333333] text-lg font-medium'> About us</h4>
          <ul className='flex flex-col gap-2 text-[#757575] text-sm font-normal'>
            <li>About us</li>
            <li>Faq</li>
            <li>Report Problem</li>
          </ul>
        </div>
        <div className='flex flex-col gap-3'>
          <h4 className='text-[#333333] text-lg font-medium mb-2'>
            Newsletter
          </h4>
          <p className='font-normal text-sm text-[#757575] mb-1'>
            Get now free 50% discount for alll products on your first order
          </p>
          <div className='flex'>
            <input
              type='text'
              placeholder='Your Email address'
              className='px-2 border border-[#757575] rounded-md placeholder:text-black bg-transparent'
            />
            <button className='bg-[#8BAC3E] text-white px-4 py-2 rounded-md ml-[-5px] uppercase text-sm font-medium hover:bg-[#6B8E23]'>
              Send
            </button>
          </div>
          <div className='flex items-center'>
            <div className='rounded-full text-[#8BAC3E] hover:bg-[#8BAC3E] hover:text-white px-2 py-2 grid place-content-center transition-all cursor-pointer'>
              <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5' />
            </div>
            <p>elemesid@gmail.com</p>
          </div>
          <div className='flex items-center'>
            <div className='rounded-full text-[#8BAC3E] hover:bg-[#8BAC3E] hover:text-white px-2 py-2 grid place-content-center transition-all cursor-pointer'>
              <FontAwesomeIcon icon={faPhone} className='w-5 h-5' />
            </div>
            <p>0888 1111 2222 </p>
          </div>
        </div>
      </div>
      <p className='uppercase text-[#757575] font-normal text-xs text-center mb-8'>
        © 2021 Elemes id. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
