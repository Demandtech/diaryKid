export default function Tokenomic() {
  return (
    <div id='tokenomic' className='text-white pb-20 px-5 md:px-14 lg:px-20'>
      <h2 className='text-3xl mb-3'>Tokenomic</h2>
      <div className='flex flex-col lg:flex-row flex-wrap gap-5'>
        <div className='text-xl flex item-center justify-between border-2 border-white rounded-md px-4 py-3 min-w-[300px] flex-1'>
          <p className='text-xl'>Symbol</p>
          <p className='text-white/70'>$KID</p>
        </div>
        <div className='text-xl flex item-center justify-between border-2 border-white rounded-md px-4 py-3 min-w-[300px] flex-1'>
          <p>Tax</p>
          <p className='text-white/70'>0/0</p>
        </div>
        <div className='text-xl flex item-center justify-between border-2 border-white rounded-md px-4 py-3 min-w-[300px] flex-1'>
          <p>Liquidity</p>
          <p className='text-white/70'>Burned Forever</p>
        </div>
        <div className='text-xl flex item-center justify-between border-2 border-white rounded-md px-4 py-3 flex-wrap min-w-[300px] w-full'>
          <p>Token Address</p>
          <p className='text-white/70'>0x0122354444444444444</p>
        </div>
      </div>
    </div>
  );
}
