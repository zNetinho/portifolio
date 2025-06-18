import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const links = [
    {
        "label": "Home",
        "href": "#sobre"
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
    toggle?: boolean
    setToggleMenu?: React.Dispatch<React.SetStateAction<boolean>>
}

const handleScrollTo = (id: string) => {
    console.log("id clicado", id);
    if (!id) return null;
    const section = document.getElementById(id.replace("#", ""));
    console.log(section)
    if (section) {
        const offSetTop = section.getBoundingClientRect().top + (window.pageYOffset - 150);
        if (typeof window !== undefined) {
            window.scrollTo({
                top: offSetTop,
                behavior: "smooth",
            })
        }
    }
}

function Menu({ children, className, direction = false, setToggleMenu = () => { }, toggle }: PropsMenu) {

    const handleClick = (e: any, id: string) => {
        e.stopPropagation();
        setToggleMenu(!toggle)
        handleScrollTo(id)
    }

    return (
        <nav>
            <div className='w-full px-1.5 py-0.5'>
                <ul className={`ml-auto flex flex-${direction ? 'col' : 'row'} gap-1`}>
                    {
                        links.map((link) => (
                            <li key={link.label}
                                onClick={(e) => handleClick(e, link.href)}
                            >
                                <div
                                    className={cn([
                                        'text-black dark:hover:text-gray-700 hover:text-white dark:focus:text-gray-700 transition-colors duration-300', "group inline-flex h-3 w-max items-center justify-center rounded-md px-1 py-2 text-sm font-semibold tracking-widest transition-colors text-black hover:text-gray-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral_custom/50 data-[state=open]:bg-neutral_custom/50 dark:text-white dark:hover:text-gray-200 dark:focus:bg-gray-800 dark:focus:text-gray-50 hover:no-underline cursor-pointer"
                                    ])}
                                    id={link.href}
                                >
                                    {link.label}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
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
