import React from 'react'

const OfferPage = () => {
  return (
    <section className='w-full m-h-screen flex flex-col text-[#fff] p-20'>
      <div className="w-full">
        <h1 className='text-3xl text-purple-400'>WARdrobe</h1>
        <p className='text-5xl font-light leading-20'>we offers personalized styling for men and women, tailoring fashion choices to individual tastes and lifestyles.</p>
        <p className='text-5xl font-light leading-20'>subscriptions for ongoing trends, and convenient rentals for a constantly evolving fashion experience.</p>
      </div>
      <div className="w-full flex justify-evenly items-center my-10">
        <div className="img w-1/2 flex justify-center items-center"><img className='w-64 object-cover rounded-full' src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <div className="txt w-1/2 flex justify-evenly items-start flex-col px-10">
            <h3 className='text-xl text-purple-500 font-normal'>OUR SERVICES </h3>
            <h1 className='text-5xl my-5'>Personal Styling</h1>
            <p className='text-xl font-light'>Our experienced stylists curate outfits tailored to your individual style and preferences. We use techniques like body type analysis and color theory to create the perfect look.</p>
            <h1 className='text-5xl text-zinc-500 mt-5'>Wardrobe Styling</h1>
            <h1 className='text-5xl text-zinc-500 mt-5'>Clothing rental </h1>
        </div>
      </div>
    </section>
  )
}

export default OfferPage
