import React from 'react';
import CatagoryItem from './CatagoryItem';
import cupcake from '@/public/cupcake.png';
import pizza from '@/public/pizza.png';
import kebab from '@/public/kebab.png';
import salmon from '@/public/salmon.png';
import doughnut from '@/public/doughnut.png';
import Slider from './Slider';

export default function CatagoryList() {
  const catagory = [
    {
      icon: cupcake,
      color: 'bg-[#F0FEEB]',
      text: 'Cupcake',
      count: '22',
    },
    {
      icon: pizza,
      color: 'bg-[#F2F2F2]',
      text: 'Pizza',
      count: '25',
    },
    {
      icon: kebab,
      color: 'bg-[#EAEEFA]',
      text: 'Kebab',
      count: '12',
    },
    {
      icon: salmon,
      color: 'bg-[#F9EEF3]',
      text: 'Salmon',
      count: '22',
    },
    {
      icon: doughnut,
      color: 'bg-[#F3F7D9]',
      text: 'Dougnut',
      count: '11',
    },
  ];

  return (
    <section className='mt-20'>
      <h2 className='text-2xl text-[#333333] font-medium md:text-4xl md:leading-[50px] overflow-hidden'>
        Browse our Catagory
      </h2>
      <p className='text-2xl text-[#8BAC3E] font-medium md:text-4xl md:leading-[50px]'>
        Receipt
      </p>
      <Slider />
    </section>
  );
}
