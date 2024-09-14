"use client"
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { AnimatePresence, motion } from 'framer-motion'

function Page(props: { children: React.ReactNode }) {
  return (
    <>
      <Header />
        <motion.main className="container h-full px-1 lg:px-3">
          {props.children}
        </motion.main>
      <Footer />
    </>
  )
}

export default Page
