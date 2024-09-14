import React, { ReactNode } from 'react'
import html5 from './public/icons/programing/html-5.svg'
import css3 from './public/icons/programing/css3.svg'
import javascript from './public/icons/programing/javascript.svg'
import typescript from './public/icons/programing/typescript.svg'
import ReactIcon from './public/icons/programing/react.svg'
import nodeJsIcon from './public/icons/programing/node-js.svg'
import sql from './public/icons/programing/sql_language.svg'
import git from './public/icons/programing/github.svg'
import tailwindCss from './public/icons/programing/tailwind_css.svg'
import pythonIcon from './public/icons/programing/python.svg'

type SkillType = {
    name: string
    level: number
    icon?: React.ReactNode | string
}

export const skills: SkillType[] = [
    {
        name: 'HTML',
        level: 5,
        icon: html5
    },
    {
        name: 'CSS',
        level: 3,
        icon: css3
    },
    {
        name: 'JavaScript',
        level: 5,
        icon: javascript
    },
    {
        name: 'TypeScript',
        level: 4,
        icon: typescript
    },
    {
        name: 'React',
        level: 5,
        icon: ReactIcon
    },
    {
        name: 'Node.js',
        level: 4,
        icon:  nodeJsIcon
    },
    {
        name: 'SQL',
        level: 3,
        icon: sql
    },
    {
        name: 'Git',
        level: 4,
        icon: git
    },
    {
        name: 'Tailwind CSS',
        level: 4,
        icon: tailwindCss
    },
    {
        name: 'Python',
        level: 3,
        icon: pythonIcon
    }

]