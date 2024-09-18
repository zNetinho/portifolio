import React from 'react'
import { poppins } from './ui/fonts'

export default function Hero() {
  return (
    <div className='w-full pt-1'>
      <div className='flex h-auto'>
        <div className="relative flex flex-col justify-center items-center npm">
          <div className="ml-1 h-40 bg-gradient-to-b from-primary_custom-400 to-primary_custom-500 w-[1px] animate-increase-height"></div>
        </div>
        <div>
          <h1 className={`text-4xl md:text-6xl font-bold ${poppins.className}`}>Olá, eu sou o Neto! <br/>
              <span className='text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary_custom-100 to-primary_custom-400'>Web Developer full stack</span>
          </h1>
        </div>
      </div>
      <div className="w-full pb-2 md:pb-0">
        <img src="/hero.png" alt="" className='object-contain'/>
      </div>
    </div>
  )
}
