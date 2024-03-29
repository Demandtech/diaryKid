import logo from '../assets/logobg.jpeg';

export default function Hero() {
  return (
    <div
      id='hero'
      className=' text-white px-5 md:px-14 lg:px-20 flex flex-col-reverse md:flex-row gap-10 pt-12 pb-10 lg:items-center border-b border-white/20'
    >
      <div>
        <h3 className='text-2xl'>Welcome to</h3>
        <h1 className='text-6xl py-5'>DiaryOfCryptoKid</h1>
        <p className='font-thin'>
          Everyone has their own story to be told.
          <br />
          This is the Diary of A Crypto Kid lets make it a great one!
        </p>
        <div className='flex md:inline-flex flex-col md:flex-row gap-5 justify-center mt-5'>
          <a
            className='z-10 text-center px-5 py-2 rounded-md overflow-hidden font-thin border border-white/70 whitespace-nowrap'
            href=''
          >
            BUY NOW!
          </a>
          <a
            className='z-10 text-center px-5 py-2 rounded-md overflow-hidden font-thin border border-white/70 whitespace-nowrap bg-white text-black'
            href='https://t.me/diaryofacrypto_kid'
            target='_blank'
            rel="noreferrer"
          >
            Join The Community
          </a>
        </div>
      </div>
      <div className='flex-1 z-50'>
        <div className='shadow-xl shadow-white max-w-[400px] mx-auto rounded-full overflow-hidden border-[10px] border-white'>
          <img width='100%' height='100%' src={logo} alt='Logo' />
        </div>
      </div>
    </div>
  );
}
