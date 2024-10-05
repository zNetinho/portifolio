import React from 'react'
import { ModeToggle } from '../toggle-theme'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full flex relative bottom-0 z-0">
      <div className="w-full flex flex-col justify-center p-1 text-xs text-center">
        <span>Desenvolvido por Netinho </span>
        <span className="text-neutral-500">
          <Link 
            href="#contato"
            title="Seja levado para o formulário de contato"
          >
            Se você chegou até aqui, da sua opinião aí pow 😁
          </Link>
        </span>
      </div>
    </footer>
  )
}

export default Footer
