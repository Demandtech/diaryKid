import About from './components/About';
import FallingDots from './components/FallingDot';
import Header from './components/Header';
import Hero from './components/Hero';
import Tokenomic from './components/Tokenomic';

export default function App() {
  return (
    <div className='bg-[#060406] min-h-sreen relative  overflow-x-hidden'>
      <Header />
      <div className='max-w-[1440px] mx-auto'>
        <Hero />
        <About />
        <Tokenomic />
      </div>
      <FallingDots />
    </div>
  );
}
