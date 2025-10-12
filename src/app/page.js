"use client"
import React, { useEffect } from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import ImageUploader from './components/Endpoints'
import FeatherScroll from "scrollfeather"

const page = () => {

  useEffect(() => {
    const scroll = new FeatherScroll({
      smooth: true, 
      duration: 1.2, 
      easing: (t) => 1 - Math.pow(1 - t, 3), 
      direction: 'vertical', 
      gestureDirection: 'both',
      mouseSensitivity: 1, 
      touchSensitivity: 2, 
      infinite: false
    });
    return () => scroll?.destroy?.(); // optional cleanup
  }, []);


  return (
    <>
      <NavBar />
      <Hero />
      <ImageUploader/>
    </>
  )
}

export default page