"use client"
import Link from 'next/link'
import { Code, MenuIcon, X } from 'lucide-react'
import { Menu } from '../Menu'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="container mx-auto md:px-6 lg:px-8 contents">
      <header className="flex h-20 w-full shrink-0 items-center px-2 sm:px-4 md:px-6 border-b-gray-800 border-b-[1px] drop-shadow-lg">
        <Link href="#" className="mr-6 flex items-center" prefetch={false}>
          <Code className="h-6 w-6 flex hover:backdrop-sepia" />
          <div className='flex flex-col text-center'>
            <span className="ml-1">Developer</span>
            <span className="ml-1">Portifolio</span>  
          </div>
        </Link>
        {/* Menu desktop */}
        <div className='hidden lg:block'>
          <Menu />
        </div>
        {/* Fim menu desktop */}
        {/* Menu mobile */}
        <div className="lg:hidden w-full flex justify-end">
          { !toggle ? <MenuIcon
            className='cursor-pointer'
            onClick={() => setToggle(!toggle)}
          /> : <X className='cursor-pointer' onClick={() => setToggle(!toggle)}/>}
        </div>
        <div className={`${
              toggle ? 'translate-y-0 opacity-100' : 'translate-y-[-30px] opacity-0'
              } h-auto rounded-lg bg-gray-800 absolute z-10 top-20 right-5 transition-all duration-300 ease-in-out`}
    >
          <Menu direction={true} className='transition-transform delay-200 translate-y-3'/>
        </div>
        {/* Fim menu mobile */}
      </header>
    </div>
  )
}
