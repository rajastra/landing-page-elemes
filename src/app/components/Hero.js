import Image from 'next/image';
import React from 'react';
import hero from '@/public/hero-mobile.png';
import herolg from '@/public/hero-lg.png';

const Hero = () => {
  return (
    <section className='md:grid lg:grid-cols-[1fr,2fr]'>
      <h1 className='text-[#8BAC3E] text-5xl leading-normal font-medium md:self-end mb-10 md:text-[64px] md:leading-[64px]'>
        Good Food Us Good Mood
      </h1>
      <Image src={hero} alt='gambar hero mobile' className='lg:hidden' />
      <Image
        src={herolg}
        alt='gambar hero large'
        className='hidden lg:inline-block lg:row-span-2 lg:justify-self-center'
      />
      <div className='lg:row-start-2'>
        <p className='text-[#757575] text-lg'>
          I would think that conserving our natural resources should be a
          conservative position: Not to waste food, and not to throw away a lot
          of the food that we buy.
        </p>
        <div className='flex gap-5 mt-8'>
          <button className='px-[18px] py-[10px] text-sm bg-[#8BAC3E] hover:bg-[#6B8E23] rounded-[100px] text-white font-normal shadow-lg transition-all'>
            Daftar Sekarang
          </button>
          <button className='px-[18px] py-[10px] text-sm bg-[#F2F2F2] hover:bg-gray-200 rounded-[100px] text-black font-medium transition-all'>
            About us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
