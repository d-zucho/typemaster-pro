import KbAndPhone from '../assets/desktop/image-phone-and-keyboard.jpg'
import KeyboardAndGlass from '../assets/desktop/image-glass-and-keyboard.jpg'

const Info = () => {
  return (
    <section
      id='info-section'
      className='grid grid-cols-12 gap-6 my-20 h-[500px]'
    >
      <div id='img1' className='relative bg-primary col-span-3 rounded-[20px]'>
        {/* <div id='imgOverlay'></div> */}
        <img
          src={KbAndPhone}
          alt='Keyboard'
          className='w-full h-full absolute object-cover mix-blend-overlay rounded-2xl'
        />
      </div>
      <div id='img2' className='rounded-2xl col-span-5 max-w-[450px]'>
        <img
          src={KeyboardAndGlass}
          alt='Keyboard'
          className='rounded-2xl object-cover w-full h-full'
        />
      </div>
      <div id='img2' className='flex flex-col justify-center gap-4 col-span-3'>
        <h2 className='text-3xl font-bold text-secondary'>
          <span className='block leading-9'>Mechanical</span>{' '}
          <span className='block leading-9'>Wireless</span>{' '}
          <span className='block leading-9'>Keyboard</span>
        </h2>
        <p className='text-secondaryLight'>
          The Typemaster keyboard boasts top-notch build and practical design.
          It offers a wide variety of switches and keycaps, along with reliable
          wireless connectivity.
        </p>
      </div>
    </section>
  )
}

export default Info
