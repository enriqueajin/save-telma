import { Donate } from "./components/donate/Donate";
import { Expenses } from "./components/expenses/Expenses";
import { Faq } from "./components/faq/Faq";
import { Footer } from "./components/footer/Footer";
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
        <Faq />
      </main>
      <Footer />
    </>
  )
}