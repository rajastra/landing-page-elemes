import Image from 'next/image';
import logo from '@/public/elemes-logo.png';

const Header = () => {
  return (
    <header>
      <nav className='flex justify-between items-center h-[89px] px-8'>
        <Image src={logo} alt='elemes logo' className='w-[136px] h-[36px]' />
        <button className='px-[18px] py-[10px] text-sm bg-[#8BAC3E] rounded-[100px] text-white font-normal'>
          Daftar Sekarang
        </button>
      </nav>
    </header>
  );
};

export default Header;
