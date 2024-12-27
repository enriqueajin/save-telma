import { useMobileNav } from "../../hooks/useMobileNav";
import { Nav } from "./nav/Nav";

export function Header () {
  return (
    <header className='h-24 bg-pastelPink'>
      <Nav />
    </header>
  )
}