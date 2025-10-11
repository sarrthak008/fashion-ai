import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from "gsap"

const Hero = () => {


    const hashtags = [ "#AIStylist", "#SmartFashion","#OutfitSuggestions", "#VirtualTryOn"]

     useGSAP(()=>{
      let tl = gsap.timeline()
       tl.from(".txt",{
        y:-50,
        duration:1,
        opacity:0
       })

       tl.from(".para",{
          y:-10,
          duration:1,
          opacity:0
       })

       tl.from(".tags",{
        y:-10,
        opacity:0,
         stagger:{
          amount:1.2,
          grid:[1,4],
          from:"start"
         }
       })

     },[])


  return (
    <div className='h-[70vh] md:h-[90vh] w-screen flex items-center justify-center flex-col' >
         <div className=' text-5xl md:text-7xl txt'>Fashion ✘ AI</div>
         <p className='text-xl md:text-2xl text-gray-500 text-center para'>My personal AI stylist — smart clothing suggestions, built with <span className='text-red-500'>love</span> by <span className='text-sky-500'>Sarthak</span></p>
         <div className='mt-6 flex flex-wrap'>
              {
                hashtags.map((tag,i)=>(
                    <span key={i} className='tags bg-black text-gray-300 py-[4px] md:py-2 px-4 m-2 rounded-sm cursor-pointer font-normal text-sm'>{tag}</span>
                ))
              }
         </div>
    </div>
  )
}

export default Hero