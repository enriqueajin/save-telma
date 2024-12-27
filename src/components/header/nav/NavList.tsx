import { navOptions } from "../../../utils/navOptions";
import { NavItem } from "./NavItem";

export function NavList ({ 
  isMobileMenuOpen,
  setMobileMenuOpen
}: { 
  isMobileMenuOpen: boolean,
  setMobileMenuOpen: (isOpen: boolean) => void
}) {
  const menuClassName = isMobileMenuOpen ? 'top-24' : 'top-[-100%]';
  return(
    <div className={`${menuClassName} w-full lg:w-auto nav-links bg-vividPink lg:bg-transparent duration-200 lg:static absolute min-h-[45vh] lg:min-h-fit z-10 lg:z-0 left-0 flex items-center justify-center`}>
      <ul className='flex lg:flex-row flex-col gap-x-10 items-center text-white lg:text-black font-bold justify-evenly gap-y-10'>
        {
          navOptions.map((option) => {
            return (
              <NavItem 
                key={option.name} 
                option={option} 
                setMobileMenuOpen={setMobileMenuOpen}
              />
            )
          })
        }
      </ul>
    </div>
  )
}