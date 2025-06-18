"use client"

import { MenuIcon, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Menu } from "../Menu"

export default function ExitAnimation() {
  const refElement = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [scrolling, setScrolling] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const onScroll = (e: any) => {
    setScrollTop(e.target.documentElement.scrollTop)
    setScrolling(e.target.documentElement.scrollTop > scrollTop)
  }

  const onResize = () => {
    if (window) {
      setIsMobile(global.window.innerWidth <= 768)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)

    onResize()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [scrollTop])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`${isMobile || scrollTop > 50 ? 'block' : 'hidden'} w-full flex justify-end items-center mr-2 relative`}>
      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, scale: 0 }}
            key="menu-box"
          >
            <div
              ref={refElement}
              className={`h-auto w-56 rounded-lg dark:bg-neutral-800 bg-neutral-200 absolute z-10 top-20 right-5 transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'hidden translate-y-[-30px] opacity-0'
                }`}
            >
              <Menu direction={true} className='transition-transform delay-200 translate-y-3' setToggleMenu={handleToggleMenu} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <motion.div
        onClick={handleToggleMenu}
        whileTap={{ y: 1 }}
      >
        {isMenuOpen ? (
          <X className={`cursor-pointer`} />
        ) : (
          <MenuIcon className='cursor-pointer' />
        )}
      </motion.div>
    </div>
  )
}