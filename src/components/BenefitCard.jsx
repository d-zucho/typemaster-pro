const BenefitCard = ({ benefit }) => {
  return (
    <article className='shadow-lg p-4 rounded-2xl bg-slate-100'>
      <div className='object-cover p-4 bg-primary max-w-fit rounded-2xl'>
        <img src={benefit.icon} alt={benefit.name} className='bg-primary' />
      </div>
      <h3 className='uppercase font-black text-2xl mt-8 mb-4'>
        {benefit.title}
      </h3>
      <p className='text-secondaryLight'>{benefit.description}</p>
    </article>
  )
}

export default BenefitCard
