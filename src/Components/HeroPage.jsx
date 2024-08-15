import React from 'react'
import Navbar from './Navbar'

const HeroPage = () => {
  return (
    <section id='home' className='w-full h-screen relative text-[#fff] flex'>
    <Navbar />
    <article className='w-2/5 absolute top-[25%] p-20 text-[#fff]'>
        <h1 className='text-5xl'>Don't know <span className='text-purple-400'>what to Style?</span> worry not Wardrobe is here for you...</h1>
        <p className='my-5 text-lg'>WARdrobe provides an exclusive personal styling service for men and women, adapting fashion </p>
        <span className="text-lg  bg-[#533298] border-2 rounded-full py-2 px-4 cursor-pointer">
            Book a Demo
          </span>
    </article>
    <div className='w-1/6 h-80 bg-slate-200 absolute top-[25%] right-[15%] '>
    <img className='w-full h-full object-cover relative' src="https://images.unsplash.com/photo-1619024304505-b31bef080370?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div className="bag px-4 py-4 rounded-full bg-zinc-300 text-5xl text-purple-500 absolute bottom-[-10%] left-[-10%] "><i class="fa-solid fa-bag-shopping"></i></div>
    <div className="w-2/3 bg-zinc-400 absolute bottom-[-20%] right-[-30%] p-2 rounded-sm">
        <h1 className='text-sm font-semibold'>Buy for rent <i class="fa-solid fa-bag-shopping  text-purple-500 text-lg"></i></h1>
        <p className='text-xs'>Recommended by wardrobe</p>
        <div className="w-full flex justify-evenly items-center mt-2">
            <img className='w-10 h-10 object-cover rounded-xl' src="https://images.unsplash.com/photo-1533110398145-9f8cef8e5ad4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-10 h-10 object-cover rounded-xl' src="https://images.unsplash.com/photo-1618151672679-ea55bdc8bb49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" />
            <img className='w-10 h-10 object-cover rounded-xl' src="https://images.unsplash.com/photo-1607957158338-c516b1644f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
    </div>
    </div>
    <div className="w-60 absolute bottom-0 right-[10%] flex justify-evenly items-center mt-2 gap-1">
        <img className='w-20 h-20 object-cover rounded-3xl' src="https://images.unsplash.com/photo-1533110398145-9f8cef8e5ad4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='w-20 h-20 object-cover rounded-3xl ml-[-2vw]' src="https://images.unsplash.com/photo-1618151672679-ea55bdc8bb49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" />
        <img className='w-20 h-20 object-cover rounded-3xl ml-[-2vw]' src="https://images.unsplash.com/photo-1607957158338-c516b1644f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" />
    </div>
    </section>
  )
}

export default HeroPage
