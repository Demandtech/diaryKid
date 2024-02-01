import logo from '../assets/logobg.jpeg';
import poster from '../assets/poster.webp';

export default function Tokenomic() {
  return (
    <div id='tokenomic' className='text-white  px-5 md:px-14 lg:px-20'>
      <h2 className='text-8xl mb-3 text-center md:text-left'>
        Tokenomic
      </h2>
      <div className='flex flex-col lg:flex-row flex-wrap gap-5 pb-24'>
        <div className='text-xl flex item-center justify-between border-2 border-white rounded-md px-4 py-3 min-w-[300px] flex-1'>
          <h4 className='text-4xl'>Symbol</h4>
          <h4 className='text-white/70 text-4xl'>$KID</h4>
        </div>
        <div className='text-2xl flex item-center justify-between border-2 border-white rounded-md px-4 py-3 min-w-[300px] flex-1'>
          <h4 className='text-4xl'>Tax</h4>
          <h4 className='text-white/70 text-4xl'>1/1</h4>
        </div>
        <div className='text-2xl flex item-center justify-between border-2 border-white rounded-md px-4 py-3 min-w-[300px] flex-1'>
          <h4 className='text-4xl'>Liquidity</h4>
          <h4 className='text-white/70 text-4xl'>Burned Forever</h4>
        </div>
        <div className='text-2xl flex item-center justify-between border-2 border-white rounded-md px-4 py-3 flex-wrap min-w-[300px] w-full'>
          <h4 className='text-4xl'>Token Address</h4>
          <h4 className='text-white/70 text-4xl'>0x0122354444444444444</h4>
        </div>
      </div>
      <div className='z-10 py-10 flex justify-center'>
        <img src={poster} alt='Poster' className='z-10' />
      </div>
      <div className='flex flex-col gap-5 lg:flex-row justify-between  text-white items-center pb-10'>
        <div className='w-12 h-12 rounded-md overflow-hidden'>
          <img width='100%' height='100%' src={logo} alt='Logo' />
        </div>
        <ul className='flex gap-5 justify-center lg:gap-10 flex-wrap items-center lg:flex-row '>
          <li className='px-5'>
            <a className=' font-thin' href=''>
              Twitter
            </a>
          </li>
          <li className='px-5'>
            <a className=' font-thin' href=''>
              Chart
            </a>
          </li>
          <li>
            <a
              className=' px-5 py-2 rounded-md overflow-hidden font-thin border border-white/70 whitespace-nowrap'
              href=''
            >
              Join The Community
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
