import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

