import logo from '../assets/logobg.jpeg';

export default function Tokenomic() {
  return (
    <div id='tokenomic' className='text-white  px-5 md:px-14 lg:px-20'>
      <h2 className='text-3xl mb-3'>Tokenomic</h2>
      <div className='flex flex-col lg:flex-row flex-wrap gap-5 pb-24'>
        <div className='text-xl flex item-center justify-between border-2 border-white rounded-md px-4 py-3 min-w-[300px] flex-1'>
          <h4 className='text-2xl'>Symbol</h4>
          <h4 className='text-white/70'>$KID</h4>
        </div>
        <div className='text-2xl flex item-center justify-between border-2 border-white rounded-md px-4 py-3 min-w-[300px] flex-1'>
          <h4>Tax</h4>
          <h4 className='text-white/70'>0/0</h4>
        </div>
        <div className='text-2xl flex item-center justify-between border-2 border-white rounded-md px-4 py-3 min-w-[300px] flex-1'>
          <h4>Liquidity</h4>
          <h4 className='text-white/70'>Burned Forever</h4>
        </div>
        <div className='text-2xl flex item-center justify-between border-2 border-white rounded-md px-4 py-3 flex-wrap min-w-[300px] w-full'>
          <h4>Token Address</h4>
          <h4 className='text-white/70'>0x0122354444444444444</h4>
        </div>
      </div>
      <div className='flex justify-between  text-white items-center pb-10'>
        <div className='w-12 h-12 rounded-md overflow-hidden'>
          <img width='100%' height='100%' src={logo} alt='Logo' />
        </div>
        <ul className='flex gap-10'>
          <li>
            <a className=' font-thin' href=''>
              Twitter
            </a>
          </li>
          <li className='hidden lg:block'>
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
