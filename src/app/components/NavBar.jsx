"use client"
import gsap from 'gsap'
import React, { useEffect } from 'react'

const NavBar = () => {
  
   useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      gsap.to(".nav", {
        top: -240,
        duration: 0.5,
        opacity:0,
        ease: "power2.out",
      });

      // Clear existing timeout if still scrolling
      clearTimeout(scrollTimeout);

      // Show navbar again after user stops scrolling (e.g., 200ms delay)
      scrollTimeout = setTimeout(() => {
        gsap.to(".nav", {
          top: 0,
          duration: 0.5,
          opacity:1,
          ease: "power2.out",
        });
      }, 200);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);


  return (
    <div className='w-[100vw]  pl-4 h-12 flex items-center fixed top-0 nav' >
      <div className='text-2xl'>Fashion ✘ AI</div>
         <div className='absolute left-[10%] h-[80px] w-[25vw] bg-pink-400 bg-blur'></div>
         <div className='absolute left-[30%] h-[290px] w-[40vw] bg-yellow-300 bg-blur-1'></div>
         <div className='absolute left-[55%] h-[100px] w-[40vw] bg-sky-400 bg-blur'></div>
    </div>
  )
}

export default NavBar