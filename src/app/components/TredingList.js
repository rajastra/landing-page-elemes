import React from 'react';
import TrendingItem from './TrendingItem';
import pizzapaper from '@/public/pizzapaper.png';
import pizzameat from '@/public/pizzameat.png';
import salmonrol from '@/public/salmonrol.png';
import donerkebab from '@/public/donerkebab.png';

const TredingList = () => {
  const item = [
    {
      title: 'Pizza Paperoni',
      catagory: 'Pizza',
      rating: 4,
      image: pizzapaper,
    },
    {
      title: 'Pizza Meat',
      catagory: 'Pizza',
      rating: 3,
      image: pizzameat,
    },
    {
      title: 'Doner Kebab',
      catagory: 'Kebab',
      rating: 5,
      image: donerkebab,
    },
    {
      title: 'salmon Roll',
      catagory: 'salmon',
      rating: 4,
      image: salmonrol,
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
          />
        ))}
      </div>
    </section>
  );
};

export default TredingList;
