"use client"

import { MenuIcon, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Menu } from "../Menu"

export default function ExitAnimation() {
  const refElement = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  const onScroll = (e: any) => {
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
  }

  const onResize = () => {
    if (window) {
      if (global.window.innerWidth <= 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
  }, [isMobile]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleToggle = () => {
    setToggle(!toggle)
    setIsVisible(!isVisible)
  }

  return (
    <div className={`${isMobile || scrollTop > 50 ? 'block' : 'hidden'} w-full flex justify-end items-center mr-2 relative`}>
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0, scale: 0 }}
          key="box"
        >
          <div ref={refElement} className={`${toggle ? 'translate-y-0 opacity-100' : 'hidden translate-y-[-30px] opacity-0'
            } h-auto w-56 rounded-lg dark:bg-neutral-800 bg-neutral-200 absolute z-10 top-20 right-5 transition-all duration-300 ease-in-out`}
          >
            <Menu direction={true} className='transition-transform delay-200 translate-y-3' setToggleMenu={handleToggle} />
          </div>
        </motion.div>

      </AnimatePresence>
      <motion.div
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {isVisible ? <X
          className={`cursor-pointer`}
          onClick={() => setToggle(!toggle)}
        /> : <MenuIcon className='cursor-pointer' onClick={() => setToggle(!toggle)} />}
      </motion.div>
    </div>
  )
}
