import Image from 'next/image';
import React from 'react';
import hero from '@/public/hero-mobile.png';

const Hero = () => {
  return (
    <section>
      <h1 className='text-[#8BAC3E] text-5xl leading-normal font-medium'>
        Good Food Us Good Mood
      </h1>
      <Image src={hero} alt='gambar hero mobile' />
      <p className='text-[#757575] text-lg'>
        I would think that conserving our natural resources should be a
        conservative position: Not to waste food, and not to throw away a lot of
        the food that we buy.
      </p>
      <div className='flex gap-5 mt-8'>
        <button className='px-[18px] py-[10px] text-sm bg-[#8BAC3E] rounded-[100px] text-white font-normal shadow-lg'>
          Daftar Sekarang
        </button>
        <button className='px-[18px] py-[10px] text-sm bg-[#F2F2F2] rounded-[100px] text-black font-medium'>
          About us
        </button>
      </div>
    </section>
  );
};

export default Hero;
