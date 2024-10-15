"use client"
import Link from 'next/link'
import { Code, MenuIcon, X } from 'lucide-react'
import { Menu } from '../Menu'
import { useEffect, useRef, useState } from 'react'
import * as motion from 'framer-motion/client'

export default function Header() {
  const [toggle, setToggle] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = (e: any) => {
    setScrollTop(e.target.documentElement.scrollTop);
    setScrolling(e.target.documentElement.scrollTop > scrollTop);
  }

  const onResize = () => {
    if(window) {
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
  },[isMobile]);

  useEffect(() => {
    // defini que o scroll sempre vai para o topo, depois de carregado.
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className="container mx-auto md:px-6 lg:px-8 contents">
      <header className="sticky top-0 z-50 bg-white dark:bg-neutral-800 flex h-20 w-full shrink-0 items-center px-2 sm:px-4 md:px-6 border-b-gray-800 border-b-[1px] drop-shadow-lg">
        <Link href="#" className="mr-6 flex items-center" prefetch={false}>
          <Code className="h-6 w-6 flex hover:backdrop-sepia" />
          <div className='flex flex-col text-center'>
            <span className="ml-1">Developer</span>
            <span className="ml-1">Portifolio</span>  
          </div>
        </Link>
        {/* Menu desktop */}
        <motion.div 
          className={`${scrollTop < 50 ? 'hidden lg:block' : 'hidden' }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          <Menu />
        </motion.div>
        {/* Fim menu desktop */}
        {/* Menu mobile */}
        <motion.div 
          className={`${ isMobile || scrollTop > 50 ? 'block' : 'hidden' } w-full flex justify-end`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          { !toggle ? <MenuIcon
            className='cursor-pointer'
            onClick={() => setToggle(!toggle)}
          /> : <X className='cursor-pointer' onClick={() => setToggle(!toggle)}/>}
        </motion.div>
        <div className={`${
              toggle ? 'translate-y-0 opacity-100' : 'hidden translate-y-[-30px] opacity-0'
              } h-auto w-56 rounded-lg dark:bg-neutral-800 bg-neutral-200 absolute z-10 top-20 right-5 transition-all duration-300 ease-in-out`}
    >
          <Menu direction={true} className='transition-transform delay-200 translate-y-3' setToggleMenu={setToggle} toggle={toggle}/>
        </div>
        {/* Fim menu mobile */}
      </header>
    </div>
  )
}
