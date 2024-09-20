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
    title: "Dashboard ecommerce",
    description: "Projeto, criado com Next.js, Um loja online, onde tem também um painel de administração",
    languages: ["React", "Next.js", "Typescript"],
    image: {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "Imagem do Projeto 1",
      fetchPriority: "low",
      loading: "lazy"
    },
    link: "https://github.com/zNetinho/dashboard-ecommerce"
  },
  {
    id: 2,
    title: "Websocket chat",
    description: "Chat em tempo real criado com websocket.io",
    languages: ["HTML", "CSS", "JavaScript"],
    image: {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "Imagem do Projeto 2",
      fetchPriority: "low",
      loading: "lazy"
    },
    link: "https://github.com/zNetinho/websocket_chat"
  },
  {
    id: 3,
    title: "Otimizador de imagem CLI",
    description: "Uma CLI que baixa e otimiza as imagens enviadas numa planilha do sheets.",
    languages: ["Typescript", "JavaScript"],
    image: {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "Imagem do Projeto 3",
      fetchPriority: "low",
      loading: "lazy"
    },
    link: "https://github.com/zNetinho/optimize-cli"
  },
  {
    id: 4,
    title: "Api Estoque",
    description: "API de controle de estoque, com rotas privadas, middlewares, tratativas de erros e autenticação.",
    languages: ["JavaScript", "Node.js"],
    image: {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "Imagem do Projeto 1",
      fetchPriority: "low",
      loading: "lazy"
    },
    link: "https://github.com/zNetinho/api_estoque"
  },
  {
    id: 5,
    title: "API TODO como Nestjs",
    description: "API de TODO de tarefas, onde o usuário pode se registrar, e criar tarefas do dia a dia para conseguir se organizar, a aplicação com sistema de filas e cache do Redis para aumentar a performance e diminuir a carga do servidor, também tem o sistema de envio de e-mail sempre que um usuário se cadastra.",
    languages: ["Nest.js", "Typescript", "JavaScript"],
    image: {
      src: "https://picsum.photos/seed/picsum/200/300",
      alt: "Imagem do Projeto 2",
      fetchPriority: "low",
      loading: "lazy"
    },
    link: "https://github.com/zNetinho/todo-nestjs"
  },
  // {
  //   id: 6,
  //   title: "Projeto 3",
  //   description: "Terceiro projeto com detalhes sobre seu desenvolvimento e funcionalidades.",
  //   languages: ["HTML", "CSS", "JavaScript"],
  //   image: {
  //     src: "https://picsum.photos/seed/picsum/200/300",
  //     alt: "Imagem do Projeto 3",
  //     fetchPriority: "low",
  //     loading: "lazy"
  //   },
  //   link: "/projetos/projeto-3"
  // }
]

