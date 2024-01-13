import KbAndPhone from '../assets/desktop/image-phone-and-keyboard.jpg'
import KeyboardAndGlass from '../assets/desktop/image-glass-and-keyboard.jpg'

const Info = () => {
  return (
    <section id='info-section' className='grid grid-cols-3 gap-5 mt-20'>
      <div id='img1' className='relative bg-primary w-1/2 rounded-[20px]'>
        {/* <div id='imgOverlay'></div> */}
        <img
          src={KbAndPhone}
          alt='Keyboard'
          className='w-full h-full absolute object-cover mix-blend-overlay rounded-2xl'
        />
      </div>
      <div id='img2'>
        <img src={KeyboardAndGlass} alt='Keyboard' />
      </div>
      <div id='img2'>
        <img src={KeyboardAndGlass} alt='Keyboard' />
      </div>
      {/* <h2>Mechanical Wireless Keyboard</h2> */}
    </section>
  )
}

export default Info
