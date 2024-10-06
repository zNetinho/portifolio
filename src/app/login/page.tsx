'use client'
import { FormLogin } from "../admin/_components/form-login";

function PageLogin() {

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="py-2 flex flex-col items-center">
          <h1>Bem vindo 😎 </h1>
          <span className='text-xs dark:text-neutral-500 text-black'>preparado para mais uma postagem?</span>
        </div>
        <FormLogin />
      </div>
    </main>
  )
}

export default PageLogin