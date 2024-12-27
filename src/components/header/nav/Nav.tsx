import { useMobileNav } from "../../../hooks/useMobileNav";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { Logo } from "../../logo/Logo";
import { Button } from "../../button/Button";
import { NavList } from "./NavList";

export function Nav () {
  const { isMobileMenuOpen, setMobileMenuOpen } = useMobileNav();
  
  return (
    <nav className="w-[90%] h-24 flex items-center justify-between mx-auto">
      <Logo />
      <NavList isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Button text='Donate' className='bg-vividPink' />
      <MobileMenuIcon isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </nav>
  )
}