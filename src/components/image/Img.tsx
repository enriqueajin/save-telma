export function Img ({
  src,
  alt,
  className
}: {
  src: string
  alt: string,
  className: string,
}) {
  return (
    <div>
      <img 
        src={src}
        alt={alt}
        className={`${className} object-cover`}
      />
    </div>
  )
}