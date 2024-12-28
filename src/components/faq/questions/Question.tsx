export function Question ({ 
  question, 
  answer
}: {
  question: string,
  answer: string
}) {
  return (
    <div className='flex flex-col bg-darkBeige p-5 rounded-lg'>
      <p className='text-chocolateBrown font-bold'>{question}</p>
      <p className='text-chocolateBrown'>{answer}</p>
    </div>
  )
}