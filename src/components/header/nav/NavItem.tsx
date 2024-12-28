import { NavOptions } from "../../../utils/navOptions"

export function NavItem ({ 
  option,
  setMobileMenuOpen
}: {
  option: NavOptions,
  setMobileMenuOpen: (isOpen: boolean) => void
}) {
  const Icon = option.icon
  return (
    <>
      <a href={`#${option.name}`} onClick={() => setMobileMenuOpen(false)}>
        <li key={option.name} className="flex items-center gap-x-2 px-3 py-3 rounded-xl hover:text-vividPink transition">
          <Icon className="w-6 h-6" />
          <p className=''>{option.name}</p>
        </li>
      </a>
    </>
  )
}