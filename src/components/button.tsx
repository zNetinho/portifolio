import React from 'react'
import { motion } from 'framer-motion'
import { GenericsProps } from '@/types/common'
import { cn } from '@/lib/utils'

function ButtonComponent({children, className}: GenericsProps) {
  return (
    <motion.button
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.01 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        whileInView={{ opacity: 1 }}
        className={cn(['', className])}
    >
        {children}
    </motion.button>
  )
}

export default ButtonComponent