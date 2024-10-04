import React from 'react'

const Showcase = () => {
    return (
        <div style={{ background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(./images/showcase.jpg)`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='h-[600px] sm:rounded-xl flex justify-end p-6 sm:p-8 lg:p-20 w-full bg-cover bg-center text-white bg-no-repeat'>
            <div className='bg-green1000 text-white p-4 lg:p-10 rounded-3xl w-11/12 sm:w-5/6 lg:w-1/2 h-fit flex flex-col gap-5'>
                <h1 className='text-[32px] font-bold'>Showcase Your Best Shots. Get Rewarded.</h1>
                <p>Upload your finest photography and gain exposure. Share your talent, connect with fellow photographers, and earn rewards while showcasing your work to the world.</p>
                <button className='bg-[rgb(255,255,255,0.3)] py-3 px-5 rounded-full w-fit text-sm'>
                    Let’s Get You Started
                </button>
            </div>
        </div>
    )
}

export default Showcase