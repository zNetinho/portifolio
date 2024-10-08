import React from 'react'
import { Button } from './ui/button'
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'

export default function AboutMe() {
  return (
    <div className='flex flex-col gap-3'>
      <div className='text-center text-xl'>
        <p>Desenvolvedor web com 3 anos de experi&ecirc;ncia, especializado em back-end, cloud e automa&ccedil;&atilde;o.</p>
        <p>Possuo 2 anos de experi&ecirc;ncia em SEO, onde aplico t&eacute;cnicas avan&ccedil;adas para otimizar a performance org&acirc;nica de sites, garantindo a ader&ecirc;ncia &agrave;s melhores pr&aacute;ticas do Google.</p>
        <p>Atuo em plataformas como VTEX, Shopify, Magento, Deco.cx e Nuvemshop, desenvolvendo solu&ccedil;&otilde;es robustas e escal&aacute;veis. Al&eacute;m disso, tenho 5 meses de experi&ecirc;ncia em DevOps, trabalhando com pipelines de integra&ccedil;&atilde;o e entrega cont&iacute;nua (CI/CD) e infraestrutura em nuvem.</p>
      </div>
      <div className="flex flex-col gap-2 justify-between px-1">
        <div className='w-full flex gap-1.5 justify-center'>
          <Link
            href='https://github.com/zNetinho'
            target='_blank'
            title='Me segue no GitHub'
          >
            <Button size='sm' type='button' className='px-2 lg:px-3 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 hover:dark:bg-neutral-600'>
              <GithubIcon size={24} className='text-neutral-900 dark:text-neutral-100'/>
            </Button>
          </Link>
          <Link
            href='https://www.linkedin.com/in/antonio-flavio/'
            target='_blank'
            title="Vamos ser amigos no Linkedin?"
          >
            <Button size='sm' type='button' className='px-2 lg:px-3 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 hover:dark:bg-neutral-600'>
              <LinkedinIcon size={24} className='text-neutral-900 dark:text-neutral-100' />
            </Button>
          </Link>
          <Link
            href={'mailto:netoflavio97@hotmail.com'}
            title='Me envie um e-mail :)'
          >
            <Button size='sm' type='button' className='px-2 lg:px-3 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 hover:dark:bg-neutral-600'>
              <MailIcon size={24} className='text-neutral-900 dark:text-neutral-100'/>
            </Button>
          </Link>
        </div>
        <div className='w-full mx-auto'>
          <a
            href='curriculo-web-developer.pdf'
            download
            className='flex gap-0.5'
          >
            <Button size='lg' type='button' className='w-full flex gap-0.5 bg-gradient-to-tr from-green-600 to-green-400 rounded-lg hover:bg-green-200 text-neutral-900 hover:text-neutral-800 dark:hover:text-neutral-700'>
              <p className=''>Baixar currículo</p>
              <DownloadIcon size={24} />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
