import './App.css'
import NavHeader from './components/NavHeader'
import Hero from './components/Hero'
import Mision from './components/Mision'
import Servicios from './components/Servicios'
import Caracteristicas from './components/Caracteristicas'
import Preguntas from './components/Preguntas'
import Presencia from './components/Presencia'
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
        <Presencia />
      </main>
      <FooterSection />
    </>
  )
}

export default App
