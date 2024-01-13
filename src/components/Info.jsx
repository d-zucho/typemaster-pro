import KbAndPhoneDesktop from '../assets/desktop/image-phone-and-keyboard.jpg'
import KbAndPhoneTablet from '../assets/tablet/image-phone-and-keyboard.jpg'
import KbAndPhoneMobile from '../assets/mobile/image-phone-and-keyboard.jpg'

import KeyboardAndGlassDesktop from '../assets/desktop/image-glass-and-keyboard.jpg'
import KeyboardAndGlassTablet from '../assets/tablet/image-glass-and-keyboard.jpg'
import KeyboardAndGlassMobile from '../assets/mobile/image-glass-and-keyboard.jpg'

const Info = () => {
  return (
    <section
      id='info-section'
      className='grid grid-cols-8 md:grid-cols-12 gap-6 my-20 h-[500px]'
    >
      <div id='img1' className='relative bg-primary col-span-3 rounded-[20px]'>
        {/* <div id='imgOverlay'></div> */}
        <picture>
          <source media='(min-width: 1200px)' srcSet={KbAndPhoneDesktop} />
          <source media='(min-width: 768px)' srcSet={KbAndPhoneTablet} />
          <img
            src={KbAndPhoneMobile}
            alt='Keyboard'
            className='w-full h-full absolute object-cover mix-blend-overlay rounded-2xl'
          />
        </picture>
      </div>
      <div id='img2' className='rounded-2xl col-span-5 max-w-[450px]'>
        <picture>
          <source
            media='(min-width: 1200px)'
            srcSet={KeyboardAndGlassDesktop}
          />
          <source media='(min-width: 768px)' srcSet={KeyboardAndGlassTablet} />
          <img
            src={KeyboardAndGlassMobile}
            alt='Keyboard'
            className='rounded-2xl object-cover w-full h-full'
          />
        </picture>
      </div>
      <div className='flex flex-col text-center sm:text-left sm:flex-row md:flex-col justify-center gap-4 col-span-8 md:col-span-3'>
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
