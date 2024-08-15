import React from 'react'

const FooterPage = () => {
  return (
    <section className='w-full m-h-screen bg-zinc-300 p-5 '>
      <div className='textdiv w-full py-40 '>
        <h1 id='bg-col-text' className='text-9xl text-center'>Where Fashion Meets Convenience</h1>
      </div>
      <footer className='w-full text-[#fff] p-16 bg-[#21143D] rounded-[40px]'>
        <div className='flex'>
            <div className="left w-1/2 flex justify-between px-16">
                <div>
                <h1 className='text-5xl'>Wardrobe</h1>
                <p className='text-xs font-light mt-2'>24 Ramtalu lane, kolkata 413007</p>
                </div>
                <div>
                    <ul className='flex gap-2 flex-col'>
                        <li className='text-lg font-light'>Our service</li>
                        <li className='text-lg font-light'>Personal Styling</li>
                        <li className='text-lg font-light'>Wardrobe Styling</li>   
                        <li className='text-lg font-light'>Clothing Rental</li>
                    </ul>
                </div>
            </div>
            <div className="right w-1/2 relative">
                <h1 className='text-lg font-light'>Company</h1>
                <h2 className='text-lg mt-2 font-light'>About Us</h2>
                <a href="#home" className='h-10 w-10 bg-zinc-300 absolute top-0 right-0 rounded-full flex items-center justify-center'><i className="fa-solid fa-angle-up"></i></a>
            </div>
        </div>
        <div className='flex justify-center items-center flex-col mt-5'>
            <h1 className='text-9xl'>@wardrobe</h1>
            <div className="social flex gap-3 my-5">
                <a href="/">Instagam</a>
                <a href="/">Linkedin</a>
                <a href="/">X</a>
            </div>
            <p className='text-xs font-light text-center'>Copyright &copy; 2021 Wardrobe. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}

export default FooterPage
