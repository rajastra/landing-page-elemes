import Image from 'next/image';
import React from 'react';

const CatagoryItem = ({ icon, color, text, count }) => {
  return (
    <div
      className={`${color} rounded-lg py-[30px] px-[81px] text-center flex justify-center items-center flex-col  transition-all`}
    >
      <Image src={icon} alt={text} className='w-12 h-12 mb-6' />
      <p className='font-medium text-[#333333] text-base'>{text}</p>
      <div className='flex gap-1 mt-1'>
        <p className='text-[#333333 text-sm'>{count}</p>
        <p className='text-[#333333 text-sm'>items</p>
      </div>
    </div>
  );
};

export default CatagoryItem;
