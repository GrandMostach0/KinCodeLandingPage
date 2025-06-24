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
    <div className='relative'>
      <div className='circle c1'></div>
      <div className='circle c2'></div>
      <div className='circle c3'></div>
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
    </div>
  )
}

export default App
