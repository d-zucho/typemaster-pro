import './App.css'
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
      </main>
    </>
  )
}

export default App
