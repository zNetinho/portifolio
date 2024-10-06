import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GenericsProps } from '@/types/common'
import React from 'react'



function ButtonComponent({ children, className, type = "button" }: GenericsProps<ButtonProps>) {
    return (
        <Button
            className={cn(['w-full', className])}
            type={type}
        >
            {children}
        </Button>
    )
}

export default ButtonComponent