import { Donate } from "./components/donate/Donate";
import { Expenses } from "./components/expenses/Expenses";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";

export function App () {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Donate />
        <Expenses />
      </main>
    </>
  )
}