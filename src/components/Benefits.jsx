import Compatible from '../assets/shared/icon-compatible.svg'

import { benefitIcons } from '../benefitIcons'
import BenefitCard from './BenefitCard'

const Benefits = () => {
  return (
    <section id='benefits' className='mb-20'>
      <div
        id='benefitContainer'
        className='grid md:grid-cols-2 xl:grid-cols-4 gap-[2%]'
      >
        {benefitIcons.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </section>
  )
}

export default Benefits
