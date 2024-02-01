import aboutImg from '../assets/about.webp';
export default function About() {
  return (
    <div
      id='about '
      className='text-white py-20 px-5 md:px-14 lg:px-20 flex flex-col lg:flex-row gap-5 lg:items-center'
    >
      <div className='flex-1 '>
        <div className='lg:max-w-[400px]'>
          <img width='100%' src={aboutImg} alt='' />
        </div>
      </div>
      <div className=' lg:text-right text-center flex-1 lg:w-1/2'>
        <h2 className='text-2xl mb-3 '>
          About{' '}
          <span className='drop-shadow-md text-sh drop-shadow-white'>
            DiaryOfCryptoKid
          </span>
        </h2>
        <p className='font-thin mb-5'>
          The last 2 years have been rough for the crypto space but now times
          have changed. This year is the bulls rise 2024 and there is no better
          place to kick start it on-chain.
        </p>
        <p className='font-thin mb-5'>
          As Myro&apos;s devoted wife, ROCKIE Coin is a testament to the
          enduring bond between Raj and his furry family members!
        </p>
        <p className='font-thin'>
          This defi space is a platform where many lives change and with the
          launch of $KID we are giving the opportunity for ETH maxis to
          experience a place where your very own story to financial freedom will
          be written.
        </p>
      </div>
    </div>
  );
}