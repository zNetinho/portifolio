"use client"
import { cn } from '@/lib/utils';
import { GenericsProps } from '@/types/common';
import { motion, Variants } from "framer-motion";
import React, { useState } from 'react';

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

type Accordion = {
    isOpen: boolean;
}

function Accordion({children, className, isOpen }: GenericsProps<Accordion>) {
   return (
    <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className={cn(['', className])}
    >
        {children}
    </motion.nav>
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
            className='flex'
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
    isOpen: boolean
}

function AccordionList({ children, className, isOpen }: GenericsProps<AccordionListProps>) {
    return (
        <motion.ul
            className={cn([`min-h-[1px] ${ isOpen ? "block" : "hidden"}`], className)}
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
                        duration: 0.3
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
            className={cn(['', className])}
        >
            {children}
        </motion.li>
    )
}

interface ButtonProps extends React.ComponentProps<'button'> {
    onClick: () => void
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    isOpen: boolean
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

function AccordionTitle({children, className }: GenericsProps) {
    return (
        <h3 
            className={cn(['text-lg', className])}
        >
            {children}
        </h3>
    )
}

function AccordionText({children, className }: GenericsProps) {
    return (
        <p className={cn(['', className])}>
            { children }
        </p>
    )
}

function AccordionTeste() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Accordion
            isOpen={isOpen}
        >
            <AccordionButton
                onClick={() => setIsOpen(!isOpen)}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                className='w-full py-5 justify-between items-center text-neutral-800 border-[1px] rounded-md px-0.5'
            >
                    <AccordionTitle
                        className='font-semibold text-xl'
                    >
                        Ensino médio
                    </AccordionTitle>
                <AccordionWrapper>
                    <AccordionArrowIcon />
                </AccordionWrapper>
            </AccordionButton>
            <AccordionList
                isOpen={isOpen}
            >
                <AccordionItem>
                    <AccordionText
                        className='py-1 px-0.5'
                    >
                    {/* TODO: Atualizar arquivo constants com dados de formação, para renderizar nos accordion */}
                    </AccordionText>
                </AccordionItem>
            </AccordionList>
        </Accordion>
    )
}

export { AccordionTeste };

