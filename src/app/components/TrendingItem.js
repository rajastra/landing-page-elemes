'use client';
import Image from 'next/image';
import React from 'react';
import ReactStars from 'react-stars';

const TrendingItem = ({ title, catagory, rating, image, color }) => {
  return (
    <div
      className={`${color} col-span-4 flex flex-col rounded-2xl py-8 px-6 md:col-span-2 lg:col-span-1 hover:shadow-lg hover:scale-105 transition-all`}
    >
      <Image src={image} alt={title} />
      <h3 className='font-medium text-black text-2xl mt-4'>{title}</h3>
      <p className='text-[#8BAC3E] font-medium text-lg'>{catagory}</p>
      <ReactStars
        count={5}
        size={20}
        color2={'#FF8412'}
        value={rating}
        edit={false}
      />
    </div>
  );
};

export default TrendingItem;
