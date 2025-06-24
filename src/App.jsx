import './App.css'
import NavHeader from './components/NavHeader'
import Hero from './components/Hero'
import Mision from './components/Mision'
import Servicios from './components/Servicios'
import Caracteristicas from './components/Caracteristicas'
import Preguntas from './components/Preguntas'
import FooterSection from './components/FooterSection'

function App() {

  return (
    <>
      <NavHeader />
      <main>
        <Hero />
        <Mision />
        <Servicios />
        <Caracteristicas />
        <Preguntas />
      </main>
      <FooterSection />
    </>
  )
}

export default App
