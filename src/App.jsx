import './App.css'
import Benefits from './components/Benefits'
import Header from './components/Header'
import Hero from './components/Hero'
import Info from './components/Info'

function App() {
  return (
    <>
      <Header />
      <main className='px-8 max-w-5xl mx-auto'>
        <Hero />
        <Info />
        <Benefits />
      </main>
    </>
  )
}

export default App
