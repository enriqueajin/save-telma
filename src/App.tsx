import { Donate } from "./components/donate/Donate";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";

export function App () {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Donate />
      </main>
    </>
  )
}