import CatagoryList from './components/CatagoryList';
import Footer from './components/Footer';
import HamburgerList from './components/HamburgerList';
import Hero from './components/Hero';
import TredingList from './components/TredingList';

export default function Home() {
  return (
    <>
      <Hero />
      <CatagoryList />
      <TredingList />
      <Footer />
      <HamburgerList />
    </>
  );
}
