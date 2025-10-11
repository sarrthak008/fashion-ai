import React from 'react'

const Hero = () => {


    const hashtags = [ "#AIStylist", "#SmartFashion","#OutfitSuggestions", "#VirtualTryOn"]


  return (
    <div className='h-[70vh] md:h-[90vh] w-screen flex items-center justify-center flex-col' >
         <div className=' text-5xl md:text-7xl'>Fashion ✘ AI</div>
         <p className='text-xl md:text-2xl text-gray-500 text-center'>Your personal AI stylist — smart clothing suggestions, built with <span className='text-red-500'>love</span> by <span className='text-sky-500'>Sarthak</span></p>
         <div className='mt-6 flex flex-wrap'>
              {
                hashtags.map((tag,i)=>(
                    <span key={i} className='bg-black text-gray-300 py-[4px] md:py-2 px-4 m-2 rounded-sm cursor-pointer font-normal text-sm'>{tag}</span>
                ))
              }
         </div>
    </div>
  )
}

export default Hero