import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { FormLogin } from './_components/form-login'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login admin',
  description: 'Este portifolio busca mostrar um pouco das minhas habilidades de front-end e mostrar alguns dos meus projetos back-end.',
  robots: {
    index: false,
    follow: false,
    nocache: true
  },
  alternates: {
    canonical: 'https://portifolio-mocha-psi-72.vercel.app'
  },
  verification: {
    google: "YjUifNKUAPVJprTnU97kBfMVrHLQNiG87OigmKGLSHc"
  }
}

function PageAdmin() {
  return (

    <section className="flex w-3/4 h-[80vh] items-center justify-center mx-auto py-2">
      <div className=''>
        <div className="py-2 flex flex-col items-center">
          <h1>Bem vindo 😎 </h1>
          <span className='text-xs dark:text-neutral-500 text-black'>preparado para mais uma postagem?</span>
        </div>
        <FormLogin />
      </div>
    </section>
  )
}

export default PageAdmin
