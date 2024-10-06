import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { GenericsProps } from '@/types/common'
import React from 'react'

type LabelProps = {
    htmlFor: string
}

function LabelComponent({ children, className, htmlFor = 'undefined' }: GenericsProps<LabelProps>) {
    return (
        <Label
            htmlFor={htmlFor}
            className={cn(['text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className])}
        >
            {children}
        </Label>
    )
}

export default LabelComponent