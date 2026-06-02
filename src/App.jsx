import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Services } from "./components/services"
import { Features } from "./components/features"
import { About } from "./components/about"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
