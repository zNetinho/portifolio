"use client"
import AboutMe from '@/components/AboutMe'
import { CardCarousel, Carousel, DescriptionCardCarousel, PhotoCardCarousel, TitleCardCarousel } from '@/components/Carousel'
import { Education } from '@/components/education'
import FormContact from '@/components/form/form-contact'
import { GalleryProjects } from '@/components/gallery-projects'
import Hero from '@/components/Hero'
import * as motion from "framer-motion/client"
import { projects, skills } from '../../constants'

export default function Home() {
  return (
    <motion.div className='max-w-full' initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: 1 } }} variants={{ visible: { transition: { staggerChildren: 0 } } }}>
      <section className='lg:flex lg:flex-row justify-center items-center gap-3 py-2'>
        <div className='pb-2 md:pb-3 w-full lg:w-1/2'>
          <Hero />
        </div>
        <div id="sobre" className="pb-4 md:pb-3 w-full lg:w-1/2 px-1">
          <AboutMe />
        </div>
      </section>
      <section id="skills" className='py-2'>
        <h2 className='text-3xl dark:text-white text-center pb-2 font-bold'>Habilidades</h2>
        <div className='overflow-x-scroll scroll-smooth snap-mandatory snap-x scrollbar dark:scrollbar-dark'>
          <Carousel className='flex gap-1'>
            {skills.map((skill) => (
              <CardCarousel key={skill.name} className='w-max-[100px] min-h-48 max-h-48 p-1 flex flex-col items-center justify-center'>
                {<PhotoCardCarousel src={skill.icon} fetchPriority='low' loading='lazy' className='min-w-[100px]'></PhotoCardCarousel>}
                <TitleCardCarousel>{skill.name}</TitleCardCarousel>
                <DescriptionCardCarousel>

                </DescriptionCardCarousel>
              </CardCarousel>
            ))}
          </Carousel>
        </div>
      </section>
      <motion.section 
        id="projetos"
        className="flex flex-col w-full py-2 scrollbars"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className='text-3xl dark:text-white text-center pb-2 font-bold'>Projetos</h2>
        <GalleryProjects
          projects={projects}
        />
      </motion.section>
      <section className='py-2'>
      <h2 className='text-3xl dark:text-white text-center pb-2 font-bold'>Formações</h2>
        <Education />
      </section>
      <section id='contato' className='py-2'>
        <h2 className='text-3xl dark:text-white text-center pb-2 font-bold'>Quer falar comigo?</h2>
        <FormContact />
      </section>
    </motion.div>
  )
}
