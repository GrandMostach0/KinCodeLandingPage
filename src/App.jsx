import './App.css'
import NavHeader from './components/NavHeader'
import Hero from './components/Hero'
import Mision from './components/Mision'
import Servicios from './components/Servicios'
import Caracteristicas from './components/Caracteristicas'
import Preguntas from './components/Preguntas'

function App() {

  return (
    <>
      <NavHeader />
      <main>
        <Hero />
        <Mision />
        <Servicios />
        <Caracteristicas />
      </main>

      <Preguntas />
    </>
  )
}

export default App
