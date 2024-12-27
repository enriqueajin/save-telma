export function Button ({
  text,
  className
}: {
  text: string,
  className: string
}) {
  return (
    <a href={`#${text}`}>
      <button className={`${className} bg-primaryBlue text-white hidden lg:block rounded-lg px-6 py-3 font-bold duration-300 hover:scale-110`}>
        {text}
      </button>
    </a>
  )
}