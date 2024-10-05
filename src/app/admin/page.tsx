import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { FormLogin } from './_components/form-login'

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
