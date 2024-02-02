import logo from '../assets/logobg.jpeg';
export default function Header() {
  return (
    <div className='z-10 flex justify-between px-5 md:px-10 lg:px-14 max-w-[1440px] mx-auto pb-5 pt-10 text-white items-center border-b border-white/20'>
      <div className='w-12 h-12 rounded-md overflow-hidden z-10'>
        <img width='100%' height='100%' src={logo} alt='Logo' />
      </div>
      <ul className='flex gap-5 md:gap-10 z-10'>
        <li className='hidden lg:block'>
          <a className=' font-thin' href='#hero'>
            Home
          </a>
        </li>
        <li className='hidden lg:block'>
          <a className=' font-thin' href='#about'>
            About
          </a>
        </li>
        <li>
          <a className='hidden lg:block font-thin' href='#tokenomic'>
            Tokenomic
          </a>
        </li>
        <li>
          <a
            className=' font-thin'
            href='https://x.com/diarycryptokid?s=21&t=ednzA6ZbXQEtkRFVtZ4LcA'
            target='_blank'
            rel='noreferrer'
          >
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
            href='https://t.me/diaryofacrypto_kid'
            target='_blank'
            rel='noreferrer'
          >
            Join The Community
          </a>
        </li>
      </ul>
    </div>
  );
}
