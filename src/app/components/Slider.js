'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import cupcake from '@/public/cupcake.png';
import pizza from '@/public/pizza.png';
import kebab from '@/public/kebab.png';
import salmon from '@/public/salmon.png';
import doughnut from '@/public/doughnut.png';
import CatagoryItem from './CatagoryItem';

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
var $ = require('jquery');
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    smartSpeed: 1000,
    navClass: ['am-next', 'am-prev'],
    navText: [
      '<span class="icon"><</span> Prev',
      'Next <span class="icon">></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      500: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 5,
      },
      1400: {
        items: 6,
      },
    },
  };

  return (
    <div>
      <div id='owl-carousel-products'>
        <ul id='owl-carousel-ul' className='owl-carousel owl-loaded owl-drag'>
          <OwlCarousel
            className='owl-theme flex flex-wrap justify-center'
            margin={4}
            loop={false}
            dots={true}
            nav={false}
            animateIn={true}
            {...options}
          >
            {catagory.map((item, index) => (
              <CatagoryItem
                key={index}
                icon={item.icon}
                color={item.color}
                text={item.text}
                count={item.count}
              />
            ))}
          </OwlCarousel>
        </ul>
      </div>
    </div>
  );
};
export default Slider;
