export function Logo () {
  return (
    <div className='flex gap-3 items-center'>
      <img
        className='w-12 h-12'
       src='/heart.png'
       alt='A heart with a line indicating pulsations.'
      />
      <div className='flex font-bold text-3xl'>
        <span className='text-black'>Save</span>
        <span className='text-vividPink'>Telma</span>
      </div>
    </div>
  )
}