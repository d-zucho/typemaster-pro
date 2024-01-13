import Logo from '../assets/shared/logo.svg'

const Header = () => {
  return (
    <header className='w-full'>
      <div
        id='wrapper'
        className='bg-white px-8 max-w-5xl mx-auto flex justify-between my-6'
      >
        <div id='logo-container'>
          <img src={Logo} alt='logo' />
        </div>
        <div id='button-container'>
          <button className='bg-gray uppercase font-bold px-4 py-2 rounded-lg hover:bg-secondary hover:text-white transition-all shadow-lg active:scale-95'>
            Pre-Order Now
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
