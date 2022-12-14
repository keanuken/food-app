import React from 'react'

const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center'>The </h1><span className='text-orange-300 px-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-center'>Best</span>
                    <h1 className='px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center'>Foods </h1><span className='text-orange-300 px-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-center'>Delivery</span>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
            </div>
        </div>
    )
}

export default Hero