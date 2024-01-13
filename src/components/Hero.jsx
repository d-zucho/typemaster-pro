import HeroImg from '../assets/desktop/image-keyboard.jpg'

const Hero = () => {
  return (
    <section id='hero' className='mt-20'>
      <div id='hero-container' className='flex gap-8'>
        <div className='hero-text flex justify-center flex-1 flex-col gap-20px'>
          <h1 className='uppercase text-5xl font-black'>
            Typemaster <span className='block font-Barlow'>Keyboard</span>
          </h1>
          <p className='text-secondaryLight mt-6'>
            Improve your productivity and gaming without breaking the bank.
            Upgrade to a high quality mechanical typing experience.
          </p>
          <div id='hero-buttons' className='flex gap-8 items-center mt-10'>
            <button className='uppercase px-4 py-2 font-bold bg-primary text-white rounded-lg shadow-xl hover:bg-primaryLight transition-all active:scale-95 '>
              Pre-Order Now
            </button>
            <span className='uppercase text-secondaryLight font-bold'>
              Release on 5/27
            </span>
          </div>
        </div>
        <div id='hero-image-container' className='flex-1'>
          <img src={HeroImg} alt='Keyboard' className='rounded-2xl' />
        </div>
      </div>
    </section>
  )
}

export default Hero
