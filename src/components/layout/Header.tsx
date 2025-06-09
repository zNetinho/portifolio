"use client"
import * as motion from 'framer-motion/client'
import { Code, MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu } from '../Menu'
import { useCycle } from 'framer-motion'
import UserAvatar from '../user/avatar'
import ExitAnimation from '../animation/exit-animation'

export default function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const [toggle, setToggle] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

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
    // defini que o scroll sempre vai para o topo, depois de carregado.
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto md:px-6 lg:px-8 contents">
      <header className="sticky top-0 z-50 bg-white dark:bg-neutral-800 flex h-20 w-full shrink-0 justify-between px-2 sm:px-4 md:px-6 border-b-gray-800 border-b-[1px] drop-shadow-lg">
        <div className="flex justify-between w-full">
          <Link href="#" className="mr-6 flex items-center" prefetch={false}>
            <Code className="h-6 w-6 flex hover:drop-shadow-lg" />
            <div className='flex flex-col text-center'>
              <span className="ml-1">Developer</span>
              <span className="ml-1">Portifolio</span>
            </div>
          </Link>
          {/* Menu desktop */}
          <motion.div
            className={`${scrollTop < 50 ? 'hidden lg:block' : 'hidden'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <Menu />
          </motion.div>
          {/* Fim menu desktop */}
          {/* Menu mobile */}
          {/* <motion.div
            className={`${isMobile || scrollTop > 50 ? 'block' : 'hidden'} w-full flex justify-end items-center mr-2`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            {!toggle ? <MenuIcon
              className={`cursor-pointer`}
              onClick={() => setToggle(!toggle)}
            /> : <X className='cursor-pointer' onClick={() => setToggle(!toggle)} />}
          </motion.div> */}
          <ExitAnimation />
        </div>
        {/* Fim menu mobile */}
        <div className="flex justify-center items-center">
          <UserAvatar />
        </div>
      </header>
    </div>
  )
}
