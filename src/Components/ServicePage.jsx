 import React from 'react'

const ServicePage = () => {
  return (
    <section className='w-full m-h-screen px-20 py-16 text-[#fff] bg-[#21143D]'>
        <div className="w-full">
            <h1 className='text-2xl'>HOW IT WORKS</h1>
            <div className="w-full card flex justify-center items-center gap-6 mt-5">
                <div className="card-1 w-2/4 m-h-64 p-16 flex items-center justify-center flex-col bg-slate-400 rounded-2xl">
                    <span className='px-3 py-1 font-light text-sm rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500'>step 1</span>
                    <h1 className='text-xl text-purple-600 font-semibold text-center my-3'>Sign Up and Fill Out Your Style Profile</h1>
                    <p className='text-sm text-zinc-700 text-center'>Answer a few basic questions and tell us about your style preferences. Our stylists will use this information to curate personalized outfits for you.</p>
                </div>
                <div className="card-2 w-2/4 m-h-64 p-16 flex items-center justify-center flex-col bg-slate-400 rounded-2xl">
                    <span className='px-3 py-1 font-light text-sm rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500'>step 2</span>
                    <h1 className='text-2xl text-purple-600 font-semibold text-center my-5'>Choose your services</h1>
                    <p className='text-sm text-zinc-700 text-center'>Choose between personal styling, wardrobe Styling, or clothing rental. You can also mix and match if you like!.</p>
                </div>
                <div className="card-3 w-2/4 m-h-64 p-16 flex items-center justify-center flex-col bg-slate-400 rounded-2xl">
                    <span className='px-3 py-1 font-light text-sm rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500'>step 3</span>
                    <h1 className='text-2xl text-purple-600 font-semibold text-center my-4'>Sit back & relax</h1>
                    <p className='text-sm text-zinc-700 text-center'>Enjoy our seamless, easy-to-use service and let our stylists do the work. We'll deliver outfits or services right to your doorstep!</p>
                </div>
            </div>
        </div>
        <div className="w-full flex items-center justify-between mt-20 gap-20">
            <div className="w-1/2 bg-gray-500 flex flex-col justify-center items-start p-8 rounded-2xl">
                <h1 className='text-4xl text-purple-950'>Join Wardrobe now</h1>
                <p className='text-xl my-5'>WARdrobe provides an exclusive personal styling service for men and women, adapting fashion selections to individual tastes, demands, and lifestyle, join with 1000's of members who trust Wardrobe.</p>
                <span className="text-lg  bg-[#533298] border-2 rounded-full py-2 px-4 cursor-pointer">Book a Demo</span>
            </div>
            <div className="w-1/2 flex justify-center items-center "><img className='w-3/4 object-cover rounded-full' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        </div>
    </section>
  )
}

export default ServicePage
