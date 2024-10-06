'use client'
import { FormLogin } from "../login/_components/form-login";

function PageLogin() {

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="py-2 flex flex-col items-center">
          <h1>Bem vindo 😎 </h1>
        </div>
        <FormLogin />
      </div>
    </main>
  )
}

export default PageLogin