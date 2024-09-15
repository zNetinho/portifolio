import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const links = [
        {
            "label": "Home",
            "href": "/"
        },
        {
            "label": "Skills",
            "href": "#skills"
        },
        {
            "label": "Projetos",
            "href": "#projetos"
        },
        {
            "label": "Sobre",
            "href": "#sobre"
        },
        {
            "label": "Contato",
            "href": "#contato"
        }
]

type PropsMenu = {
    children?: React.ReactNode
    className?: string
    direction?: boolean
}

function Menu({ children, className, direction = false }: PropsMenu) {

  return (
    <nav>
        <div className='w-full px-1.5 py-[0.5rem]'>
            <ul className={`ml-auto flex flex-${direction? 'col' : 'row'} gap-1`}>
                {
                links.map((link) => (
                    <li key={link.label}>
                        <LinkMenu 
                            href={link.href}
                            prefetch={false}
                            className='text-black dark:hover:text-gray-700 hover:text-white dark:focus:text-gray-700'         
                            >
                            {link.label}
                        </LinkMenu>
                    </li>
                ))
                }
            </ul>
        </div>
    </nav>
  )
}

function ItemMenu() {

}

type LinkMenuProps = {
    href: string
    prefetch?: boolean
    children?: React.ReactNode
    className?: string
}

function LinkMenu({ href, prefetch, children, className }: LinkMenuProps) {
    return (
        <Link 
            href={href}
            prefetch={prefetch}
            className={cn([
                '', "group inline-flex h-3 w-max items-center justify-center rounded-md px-1 py-2 text-sm font-semibold tracking-widest transition-colors text-black hover:text-gray-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral_custom/50 data-[state=open]:bg-neutral_custom/50 dark:text-white dark:hover:text-gray-200 dark:focus:bg-gray-800 dark:focus:text-gray-50 hover:no-underline"
            ])}   
        >
            {children}
        </Link>
    )
}

export { Menu }
