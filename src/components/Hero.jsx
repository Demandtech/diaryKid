import logo from '../assets/logobg.jpeg';

export default function Hero() {
  return (
    <div className='text-white px-5 md:px-14 lg:px-20 flex flex-col-reverse md:flex-row gap-10 pt-12 items-center'>
      <div>
        <p>Welcome to</p>
        <h1 className='text-4xl py-5'>DiaryOfCryptoKid</h1>
        <p className='font-thin'>
          Rockie is the wife of Solana Co-Founder Raj Gokal’s dog Rocky!
        </p>
        <div className='inline-flex flex-col md:flex-row gap-5 justify-center mt-5'>
          <a
            className=' px-5 py-2 rounded-md overflow-hidden font-thin border border-white/70 whitespace-nowrap'
            href=''
          >
            Join The Community
          </a>
          <a
            className=' px-5 py-2 rounded-md overflow-hidden font-thin border border-white/70 whitespace-nowrap bg-white text-black'
            href=''
          >
            Join The Community
          </a>
        </div>
      </div>
      <div className='flex-1'>
        <div className='shadow-xl shadow-white max-w-[400px] mx-auto rounded-full overflow-hidden border-[10px] border-white'>
          <img width='100%' height='100%' src={logo} alt='Logo' />
        </div>
      </div>
    </div>
  );
}
