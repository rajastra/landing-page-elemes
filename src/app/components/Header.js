import Image from 'next/image';
import logo from '@/public/elemes-logo.png';

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between items-center h-[89px] px-8 lg:px-14'>
        <Image src={logo} alt='elemes logo' className='w-[136px] h-[36px]' />
        <ul className='list-none hidden md:flex md:gap-8'>
          <li>
            <a
              href='#'
              className='text-[#757575] text-sm font-medium hover:text-[#333333] transition-all'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-[#757575] text-sm font-medium hover:text-[#333333] transition-all'
            >
              About
            </a>
          </li>
          <li className='relative'>
            <a
              href='#'
              className='text-[#757575] text-sm font-medium hover:text-[#333333] transition-all'
            >
              Promotions
            </a>
            <span className='absolute block top-[-15px] right-[-10px] bg-[#E7462D] hover:bg-red-600  px-2 py-1 text-white text-[8px] font-bold rounded-lg'>
              HOT
            </span>
          </li>
          <li>
            <a
              href='#'
              className='text-[#757575] text-sm font-medium hover:text-[#333333] transition-all'
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href='#'
              className='text-[#757575] text-sm font-medium hover:text-[#333333] transition-all'
            >
              Contact us
            </a>
          </li>
        </ul>
        <div className='flex gap-2'>
          <button className='hidden border-none lg:block text-sm font-medium hover:text-gray-300 transition-all'>
            Masuk
          </button>
          <button className='px-[18px] py-[10px] text-sm bg-[#8BAC3E] hover:bg-[#6B8E23] rounded-[100px] text-white font-normal transition-all'>
            Daftar Sekarang
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
