"use client"
import AboutMe from '@/components/AboutMe'
import { CardCarousel, Carousel, DescriptionCardCarousel, PhotoCardCarousel, TitleCardCarousel } from '@/components/Carousel'
import Hero from '@/components/Hero'
import Page from '@/components/layout/Page'
import { skills } from '../../constants'
import { motion } from "framer-motion"
import { ModeToggle } from '@/components/toggle-theme'

export default function Home() {
  return <Page>
    <section className='lg:flex lg:flex-row justify-center items-center gap-3'>
        <div className='pb-2 md:pb-3 w-full lg:w-1/2'>
          <Hero />
        </div>
        <div className="pb-4 md:pb-3 w-full lg:w-1/2 px-1">
          <AboutMe />
        </div>
    </section>
    <section>
      <h2 className='text-3xl dark:text-white text-center pb-2 font-bold'>Habilidades</h2>
      <div className='overflow-x-scroll scroll-smooth snap-mandatory snap-x scrollbar'>
        <Carousel className='flex gap-1'>
          { skills.map((skill) => (
            <CardCarousel key={skill.name} className='w-max-[100px] min-h-48 max-h-48 p-1 flex flex-col items-center justify-center'>
              { <PhotoCardCarousel src={skill.icon} fetchPriority='low' loading='lazy' className='min-w-[100px]'></PhotoCardCarousel> }
              <TitleCardCarousel>{skill.name}</TitleCardCarousel>
              <DescriptionCardCarousel>

              </DescriptionCardCarousel>
            </CardCarousel>
          ))}
        </Carousel>
      </div>

    </section>
    <div className="sticky float-right justify-end p-1">
        <ModeToggle />
      </div>
  </Page>
}
