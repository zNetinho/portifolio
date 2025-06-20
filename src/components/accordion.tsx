"use client"
import { cn } from '@/lib/utils';
import { GenericsProps } from '@/types/common';
import { motion, Variants } from "framer-motion";
import React, { useState } from 'react';
import { courses, graduate, GraduteType } from '../../constants';
import Image from 'next/image';

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.7 } }
};

type AccordionProps = {
    isOpen: boolean;
}

function Accordion({ children, className, isOpen }: GenericsProps<AccordionProps>) {
    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className={cn(['', className])}
        >
            {children}
        </motion.div>
    )
}

function AccordionArrowIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
        </svg>
    )
}

function AccordionWrapper({ children, className }: GenericsProps) {
    return (
        <motion.div
            className={cn([className, 'flex'])}
            variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
        >
            {children}
        </motion.div>
    )
}

type AccordionListProps = {
    isOpen: boolean;
}

function AccordionList({ children, className, isOpen }: GenericsProps<AccordionListProps>) {
    return (
        <motion.ul
            className={cn([`min-h-[1px] ${isOpen ? "block" : "hidden"} border-[1px]`, className])}
            variants={{
                open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05
                    }
                },
                closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.5,
                        staggerChildren: 0.08
                    }
                }
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
            {children}
        </motion.ul>
    )
}


function AccordionItem({ children, className }: GenericsProps) {
    return (
        <motion.li
            variants={itemVariants}
            className={cn([className, ''])}
            data-open={false}
        >
            {children}
        </motion.li>
    )
}

interface ButtonProps extends React.ComponentProps<'button'> {
    onClick?: () => void;
    isOpen?: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AccordionButton({ children, className, setIsOpen, isOpen }: GenericsProps<ButtonProps>) {
    return (
        <motion.button
            className={cn(['flex', className])}
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
        >
            {children}
        </motion.button>
    )
}

function AccordionTitle({ children, className }: GenericsProps) {
    return (
        <h3
            className={cn(['border-neutral-400 text-lg dark:text-neutral-300 dark:hover:text-neutral-400 mb-0', className])}
        >
            {children}
        </h3>
    )
}

function AccordionText({ children, className }: GenericsProps) {
    return (
        <div className={cn(['border-neutral-600 border-[1px] border-t-0 ', className])}>
            {children}
        </div>
    )
}

const educations = graduate;
const programs = courses;

/**
     * Toggle accordion by providing state index with 
     * openIndexes.
     * If the index is already present in openIndexes, remove it.
     * If the index is not present in openIndexes, add it.
     * @param index The index of the accordion to toggle.
     */
const toggleAccordion = (
    index: number,
    setOpenIndexes: React.Dispatch<React.SetStateAction<number[]>>,
    setDataOpen: React.Dispatch<React.SetStateAction<boolean>>,
    dataOpen: boolean
) => {
    setDataOpen(!dataOpen)
    setOpenIndexes((prev) =>
        prev.includes(index)
            ? prev.filter((i) => i !== index)
            : [...prev, index]
    );
};


function AccordionGraduate() {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const [dataOpen, setDataOpen] = useState<boolean>(false)

    return (
        <div>
            {educations.map((course: GraduteType, index: number) => (
                <Accordion
                    isOpen={openIndexes.includes(index)}
                    key={course.name}
                >
                    <AccordionButton
                        onClick={() => toggleAccordion(index, setOpenIndexes, setDataOpen, dataOpen)}
                        isOpen={openIndexes.includes(index)}
                        setIsOpen={() => toggleAccordion(index, setOpenIndexes, setDataOpen, dataOpen)}
                        className={`w-full flex py-5 mt-1 justify-between items-center text-neutral-800 border-[1px] ${openIndexes.includes(index) ? 'bg-neutral-800 text-black mb-0 border-b-0' : 'mb-1'} focus:outline-none rounded-none rounded-b-md px-0.5  dark:border-neutral-800`}
                        data-open={false}
                    >
                        <AccordionTitle className='font-semibold text-xl'>
                            {course.name}
                        </AccordionTitle>
                        <AccordionWrapper>
                            <AccordionArrowIcon />
                        </AccordionWrapper>
                    </AccordionButton>
                    <AccordionList isOpen={openIndexes.includes(index)} className='rounded-b-md rounded-t-none'>
                        <AccordionItem className='rounded-b-md rounded-t-none'>
                            <AccordionText className={`${openIndexes.includes(index) ? 'bg-neutral-800 text-white' : ''} flex justify-between gap-5 py-1 px-0.5`}>
                                <div className="flex flex-col w-3/4">
                                    <p className='text-xl leading-4'>{course.nameOfInstitute}</p>
                                    <br />
                                    {course.description}
                                </div>
                                <div>
                                    <p className='flex-1 text-end text-sm font-normal text-neutral-500'>
                                        Data de conclusão: {course.dataOfconclusion}
                                    </p>
                                    {course.badge && (
                                        <Image
                                            src={course.badge ? course.badge : '/images/graduate.png'}
                                            alt={course.name}
                                            width={100}
                                            height={100}
                                            className='rounded-md'
                                        />
                                    )}
                                </div>
                            </AccordionText>
                        </AccordionItem>
                    </AccordionList>
                </Accordion>
            ))}
        </div>
    )
}


function AccordionCourses() {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);
    const [dataOpen, setDataOpen] = useState<boolean>(false)

    return (
        <div>
            {programs.map((course: GraduteType, index: number) => (
                <Accordion
                    isOpen={openIndexes.includes(index)}
                    key={course.name}
                >
                    <AccordionButton
                        onClick={() => toggleAccordion(index, setOpenIndexes, setDataOpen, dataOpen)}
                        isOpen={openIndexes.includes(index)}
                        setIsOpen={() => toggleAccordion(index, setOpenIndexes, setDataOpen, dataOpen)}
                        className={`w-full flex py-5 my-1 justify-between items-center border-[1px] text-neutral-800 rounded-md px-0.5 dark:border-neutral-800 ${openIndexes.includes(index) ? 'bg-neutral-800 mb-0 border-b-0' : 'mb-1'}`}
                    >
                        <AccordionTitle className='font-semibold text-xl'>
                            {course.name}
                        </AccordionTitle>
                        <AccordionWrapper>
                            <AccordionArrowIcon />
                        </AccordionWrapper>
                    </AccordionButton>
                    <AccordionList isOpen={openIndexes.includes(index)} className='rounded-none rounded-b-md rounded-t-none'>
                        <AccordionItem className={`${openIndexes.includes(index) ? 'bg-neutral-800 text-white' : ''} border-solid border-[1px] rounded-b-md rounded-t-none`}>
                            <AccordionText className='flex justify-between gap-5 py-1 px-0.5 rounded-b-md rounded-t-none'>
                                <div className={`flex flex-col w-3/4`}>
                                    <span className='text-xl leading-4'>{course.nameOfInstitute}</span>
                                    <br />
                                    {course.description}
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='flex-1 text-end text-sm font-normal text-neutral-500'>
                                        Data de conclusão: {course.dataOfconclusion}
                                    </p>
                                    {course.badge && (
                                        <Image
                                            src={course.badge ? course.badge : '/images/graduate.png'}
                                            alt={course.name}
                                            width={80}
                                            height={80}
                                            className='rounded-md'
                                        />
                                    )}
                                </div>
                            </AccordionText>
                        </AccordionItem>
                    </AccordionList>
                </Accordion>
            ))}
        </div>
    )
}

export {
    AccordionArrowIcon,
    AccordionGraduate,
    AccordionWrapper,
    AccordionCourses,
    AccordionButton,
    AccordionTitle,
    AccordionText,
    AccordionItem,
    AccordionList,
    Accordion
};
