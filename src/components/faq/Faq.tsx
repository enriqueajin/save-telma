import { QuestionList } from "./questions/QuestionList";

export function Faq () {
  return (
    <section className='flex bg-beige items-center justify-center'>
      <div className='flex flex-col w-11/12 gap-y-8'>
        <h2 className='text-4xl text-darkBrown font-bold mt-10'>
          FAQ
        </h2>
        <QuestionList />
      </div>
    </section>
  )
}