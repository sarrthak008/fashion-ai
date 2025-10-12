"use client"
import React, { useEffect } from 'react'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import { FileExplorer } from './components/FileExplorer'

const page = () => {

  return (
    <>
      <NavBar />
      <Hero />
      <FileExplorer/>
    </>
  )
}

export default page