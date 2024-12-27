export function Expense ({
  name,
  description,
  icon
}: {
  name: string,
  description: string,
  icon: React.ComponentType<{ className?: string }>;
}) {
  const Icon = icon
  return (
    <div className='flex flex-col justify-center items-center 
    bg-primaryPurple text-balance text-center rounded-lg text-darkBlue'>
      <Icon className='w-24 h-24 mb-3' />
      <p className='font-semibold'>{name}</p>
      <p className=''>{description}</p>
    </div>
  )
}