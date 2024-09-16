"use client"
import React, { useRef } from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ProjectType } from '../../constants'

type ProjectsGithub = {
    full_name: string,
    description: string,
    html_url: string,
    language: string
}

type GenericsProps<T = unknown> = {
    children?: React.ReactNode,
    className?: string
    projects?: ProjectType[]
} & T

const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

function GalleryProjects({ children, className, projects }: GenericsProps) {
    const scrollRef = useRef(null)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-0.5 w-full' ref={scrollRef} >
            {projects?.map((project) => (
                <CardProject
                    key={project.id}
                >
                    <div className='flex flex-col w-3/4'>
                        <TitleProject>
                            {project.title}
                        </TitleProject>
                        <FlagsLanguages 
                            languages={project.languages}
                        />
                        <DescriptionProject>
                            {project.description}
                        </DescriptionProject>
                    </div>
                    <div className="flex w-1/4">
                        <ImageProject
                            src={project.image.src}
                            alt={project.image.alt}
                            fetchPriority={project.image.fetchPriority}
                            loading={project.image.loading}
                        />
                    </div>
                </CardProject>
            ))}

        </div>
    )
}

function CardProject({ className, children }: GenericsProps) {

    return (
        <motion.div
            className={cn(['w-full flex gap-1 rounded-lg dark:bg-neutral-800 bg-neutral-200 p-1.5', className])}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            {children}
        </motion.div>
    )
}

function TitleProject({ className, children }: GenericsProps) {
    return (
        <h3 className={cn([className, 'text-lg font-bold'])}>
            {children}
        </h3>
    )
}

type classNameTextProps = {
    classNameText?: string
}
function DescriptionProject({ children, className, classNameText }: GenericsProps<classNameTextProps>) {
    return (
        <div className={cn([{ className }, 'py-1'])}>
            <p className={cn([{ classNameText }, 'text-sm text-wrap'])}>
                {children}
            </p>
        </div>
    )
}

type FlagLanguage = {
    languages: string[]
}
function FlagsLanguages({ languages }: FlagLanguage) {
    return (
        <div className="flex gap-1">
            {languages.map((language) => (
                <span key={language} className={`bg-${language.toLowerCase()} text-zinc-800 font-medium py-0.5 px-0.5 rounded-lg`}>
                    {language}
                </span>
            ))}
        </div>
    )
}

type ImageProjectProps = {
    src: string
    alt?: string
    fetchPriority?: 'low' | 'high'
    loading?: 'lazy' | 'eager'
}

function ImageProject({ src, fetchPriority = 'low', loading = 'lazy', alt = '' }: GenericsProps<ImageProjectProps>) {
    return (
        <motion.div
            variants={cardVariants}
        >
            <Image
                src={src}
                fetchPriority={fetchPriority}
                loading={loading}
                alt={alt}
                width={200}
                height={300}
                className='rounded-md'
            />
        </motion.div>
    )
}

function LinkProject() {
    return (
        <div>
            LinkProject
        </div>
    )
}

export {
    GalleryProjects,
    CardProject,
    TitleProject,
    DescriptionProject,
    ImageProject,
    LinkProject
};
