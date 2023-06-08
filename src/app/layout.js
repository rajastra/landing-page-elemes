import Header from './components/Header';
import './globals.css';
import { Rubik } from 'next/font/google';

const inter = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Elemes',
  description: 'Elemes - Makanan dan Minuman Favoritmu',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <main className='px-8 py-11 md:py-0 lg:px-14'>{children}</main>
      </body>
    </html>
  );
}
