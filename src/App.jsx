import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className='bg-[#010001] min-h-dvh'>
      <Header />
      <div className='max-w-[1440px] mx-auto'>
        <Hero />
      </div>
    </div>
  );
}
