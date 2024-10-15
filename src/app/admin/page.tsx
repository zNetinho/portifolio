import { Metadata } from 'next'
import TableListPosts from './_components/table-post/table'

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

    <section className="flex w-full h-auto items-center justify-center mx-auto py-2">
      <div className=''>
        <div className="py-2 flex flex-col items-center">
          <h1>Bem vindo 😎 </h1>
          <span className='text-xs dark:text-neutral-500 text-black'>preparado para mais uma postagem?</span>
        </div>
        {/* vai receber a tabela para listar os posts e também um botão para adicionar mais posts. */}
        <TableListPosts />
      </div>
    </section>
  )
}

export default PageAdmin
