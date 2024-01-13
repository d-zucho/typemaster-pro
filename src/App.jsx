import './App.css'
import Benefits from './components/Benefits'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Info from './components/Info'

function App() {
  return (
    <>
      <Header />
      <div className='px-8 max-w-5xl mx-auto'>
        <Hero />
        <Info />
        <Benefits />
        <Footer />
      </div>
    </>
  )
}

export default App
