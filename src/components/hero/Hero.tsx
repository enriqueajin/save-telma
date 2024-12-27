import { Button } from "../button/Button";
import { Img } from "../image/Img";

export function Hero () {
  return (
    <section className='flex h-[calc(100vh-96px)] items-center justify-center bg-softPink'>
      <div className='w-10/12 xl:w-9/12 gap-x-7 grid grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col col-span-1 text-balance justify-center gap-y-8'>
          <h1 className='text-4xl text-vividPink font-bold'>Hi, I'm Telma</h1>
          <p className='text-lg'>
            I am battling a rare type of cancer called Pseudomyxoma Peritonei, 
            whose treatment is not available in my country, Guatemala. Unfortunately, 
            my family and I do not have the financial means to afford this treatment 
            abroad, but I refuse to lose hope. Today, I am knocking on the door of 
            your heart to ask for your support during this difficult journey.
          </p>
          <Button text='Donate' className='bg-vividPink' />        
        </div>
        <div className='flex justify-center items-center'>
          <Img 
            src='/patient.jpg' 
            alt='Illustration of a patient hospitalized'
            className='w-full h-full rounded-lg'
          />
        </div>
      </div>
    </section>
  )
}