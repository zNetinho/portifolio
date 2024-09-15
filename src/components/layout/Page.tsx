"use client"
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { AnimatePresence, motion } from 'framer-motion'

const viewPort = window.visualViewport
console.log(viewPort?.pageTop);

function Page(props: { children: React.ReactNode }) {

  return (
    <>
      <Header />
        <motion.main className="container min-h-screen h-full px-1 lg:px-2">
          {props.children}
        </motion.main>
      <Footer />
    </>
  )
}

export default Page
