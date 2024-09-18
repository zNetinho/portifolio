import { cn } from '@/lib/utils'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import Image from 'next/image'
import React from 'react'

type genericsProps<T = unknown> = {
  children?: React.ReactNode
  className?: string
} & T


function Carousel({ children, className }: genericsProps) {
  return (
    <div
      className={cn([
        'w-full h-60 transition-transform duration-300 ease-in-out max-xs:overflow-x-scroll scroll-smooth snap-x scrollbar',
        className,
      ])}
    >
      {children}
    </div>
  )
}

function CardCarousel({ children, className }: genericsProps) {
  return (
    <motion.div 
        whileHover={{ scale: 1.2 }}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.0 }}
        transition={{ duration: 0.5 }}
        className={cn(['rounded-lg', className])}
      >
        {children}
      </motion.div>
  )
}

type PhotoCardCarouselProps = {
  src: React.ReactNode | string | any
  fetchPriority?: 'low' | 'high'
  loading?: 'lazy' | 'eager'
}

function PhotoCardCarousel({
  className,
  src,
  fetchPriority = 'low',
}: genericsProps<PhotoCardCarouselProps>) {

    return (
      <Image
        className={cn(['rounded-lg', className])}
        src={src}
        alt="Imagem do carousel."
        width={100}
        height={100}
        fetchPriority={fetchPriority}
      />
    )

}

function TitleCardCarousel({ children, className }: genericsProps) {
  return <h3 className={cn(['text-xl font-bold', className])}>{children}</h3>
}

function DescriptionCardCarousel({ children, className }: genericsProps) {
  return (
    <p
      className={cn([
        'rounded-lg drop-shadow-md',
        className,
      ])}
    >
      {children}
    </p>
  )
}

type DotsNavegacional = {
  direction: 'left' | 'right'
}
function DotsCarousel({
  className,
  direction,
}: genericsProps<DotsNavegacional>) {
  return (
    <span className={cn(['h-[100px] w-[100px]', className])} data-direction={direction}>
      {direction === 'left' && <ArrowLeft />}
      {direction === 'right' && <ArrowRight />}
      <ArrowLeft />
    </span>
  )
}

export {
  CardCarousel,
  Carousel,
  DescriptionCardCarousel,
  DotsCarousel,
  PhotoCardCarousel,
  TitleCardCarousel,
}
