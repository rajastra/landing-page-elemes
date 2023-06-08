import React from 'react';
import TrendingItem from './TrendingItem';
import pizzapaper from '@/public/pizzapaper.png';
import pizzameat from '@/public/pizzameat.png';
import salmonrol from '@/public/salmonrol.png';
import donerkebab from '@/public/donerkebab.png';
import choco from '@/public/choco.png';
import dmilk from '@/public/dmilk.png';
import dunicorn from '@/public/dunicorn.png';
import kkebab from '@/public/kkebab.png';

const TredingList = () => {
  const item = [
    {
      title: 'Pizza Paperoni',
      catagory: 'Pizza',
      rating: 4,
      image: pizzapaper,
      bg: 'bg-[#E6F3F5]',
    },
    {
      title: 'Pizza Meat',
      catagory: 'Pizza',
      rating: 3,
      image: pizzameat,
      bg: 'bg-[#E6F3F5]',
    },
    {
      title: 'Doner Kebab',
      catagory: 'Kebab',
      rating: 5,
      image: donerkebab,
      bg: 'bg-[#E6F3F5]',
    },
    {
      title: 'salmon Roll',
      catagory: 'salmon',
      rating: 4,
      image: salmonrol,
      bg: 'bg-[#F9EEF3]',
    },
    {
      title: 'Cupcake choco',
      catagory: 'Cupcake',
      rating: 4,
      image: choco,
      bg: 'bg-[#F0FEEB]',
    },
    {
      title: 'Doughnut Milk',
      catagory: 'Doughnut',
      rating: 4,
      image: dmilk,
      bg: 'bg-[#F0FEEB]',
    },
    {
      title: 'Doughnut Unicorn',
      catagory: 'Doughnut',
      rating: 4,
      image: dunicorn,
      bg: 'bg-[#F3F7D9]',
    },
    {
      title: 'Kathi Kebab',
      catagory: 'Kebab',
      rating: 4,
      image: kkebab,
      bg: 'bg-[#EAEEFA]',
    },
  ];

  return (
    <section className='mt-20'>
      <h2 className='text-2xl text-[#333333] font-medium'>
        Browse our Trending
      </h2>
      <p className='text-2xl text-[#8BAC3E] font-medium'>Receipt</p>
      <div className='grid grid-cols-4 gap-5 mt-8'>
        {item.map((item, index) => (
          <TrendingItem
            key={index}
            title={item.title}
            catagory={item.catagory}
            rating={item.rating}
            image={item.image}
            color={item.bg}
          />
        ))}
      </div>
      <div className='flex justify-center items-center px-5 py-16'>
        <button className='px-[30px] py-[10px] text-base bg-[#8BAC3E] hover:bg-[#6B8E23] rounded-[100px] text-white font-normal transition-all'>
          All receipt
        </button>
      </div>
    </section>
  );
};

export default TredingList;
