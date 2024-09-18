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
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type SkillType = {
  name: string
  level: number
  icon?: string
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
    icon: nodeJsIcon
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
export type ProjectType = {
  id: number,
  title: string,
  description: string,
  languages: string[],
  image: {
    src: string,
    alt: string,
    fetchPriority: 'low' | 'high',
    loading: 'lazy' | 'eager'
  },
  link: string
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Esse é o primeiro projeto da galeria. Ele inclui uma animação sutil ao carregar.",
    languages: ["HTML", "CSS", "JavaScript"],
    image: {
      src: "https://picsum.photos/200/300",
      alt: "Imagem do Projeto 1",
      fetchPriority: "high",
      loading: "eager"
    },
    link: "/projetos/projeto-1"
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição breve sobre o segundo projeto da galeria.",
    languages: ["HTML", "CSS", "JavaScript"],
    image: {
      src: "https://picsum.photos/200/300",
      alt: "Imagem do Projeto 2",
      fetchPriority: "low",
      loading: "lazy"
    },
    link: "/projetos/projeto-2"
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Terceiro projeto com detalhes sobre seu desenvolvimento e funcionalidades.",
    languages: ["HTML", "CSS", "JavaScript"],
    image: {
      src: "https://picsum.photos/200/300",
      alt: "Imagem do Projeto 3",
      fetchPriority: "low",
      loading: "lazy"
    },
    link: "/projetos/projeto-3"
  },
  {
    id: 4,
    title: "Projeto 1",
    description: "Esse é o primeiro projeto da galeria. Ele inclui uma animação sutil ao carregar.",
    languages: ["HTML", "CSS", "JavaScript"],
    image: {
      src: "https://picsum.photos/200/300",
      alt: "Imagem do Projeto 1",
      fetchPriority: "high",
      loading: "eager"
    },
    link: "/projetos/projeto-1"
  },
  {
    id: 5,
    title: "Projeto 2",
    description: "Descrição breve sobre o segundo projeto da galeria.",
    languages: ["HTML", "CSS", "JavaScript"],
    image: {
      src: "https://picsum.photos/200/300",
      alt: "Imagem do Projeto 2",
      fetchPriority: "low",
      loading: "lazy"
    },
    link: "/projetos/projeto-2"
  },
  {
    id: 6,
    title: "Projeto 3",
    description: "Terceiro projeto com detalhes sobre seu desenvolvimento e funcionalidades.",
    languages: ["HTML", "CSS", "JavaScript"],
    image: {
      src: "https://picsum.photos/200/300",
      alt: "Imagem do Projeto 3",
      fetchPriority: "low",
      loading: "lazy"
    },
    link: "/projetos/projeto-3"
  }
]

