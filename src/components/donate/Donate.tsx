import { Button } from "../button/Button";
import { Img } from "../image/Img";

export function Donate () {
  return (
    <section
      id='Donate' 
      className='flex h-screen items-center justify-center bg-softPurple'
    >
      <div className='w-10/12 xl:w-9/12 gap-x-7 grid grid-cols-1 lg:grid-cols-2 gap-y-10'>
        <div className='flex justify-center items-center'>
          <Img
            src='/donate.jpg' 
            alt='Illustration of a patient hospitalized'
            className='w-full h-full rounded-lg border border-gray-400'
          />
        </div>
        <div className='flex flex-col col-span-1 text-balance justify-center gap-y-8'>
          <h2 className='text-4xl text-darkPurple font-bold'>Donate</h2>
          <p className='text-lg'>
          We would be immensely grateful for your 
          contribution regardless of the amount.
          </p>
          <Button text='Donate' className='bg-darkPurple' />        
        </div>
      </div>
    </section>
  )
}