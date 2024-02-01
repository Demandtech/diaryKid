import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Tokenomic from './components/Tokenomic';

export default function App() {
  return (
    <div className='bg-[#010001] min-h-dvh'>
      <Header />
      <div className='max-w-[1440px] mx-auto'>
        <Hero />
        <About />
        <Tokenomic />
      </div>
    </div>
  );
}
