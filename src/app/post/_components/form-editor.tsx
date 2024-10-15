'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { GenericsProps } from '@/types/common'
import React from 'react'

function FormEditor({
    children,
    className
}: GenericsProps) {

    return (
        <div className={cn(['w-full flex gap-2 flex-wrap', className])}>
            {children}
        </div>
    )
}

type inputFormsType<T = unknown> = {
    setAction: React.Dispatch<React.SetStateAction<T>>
    value: string
    id: string
    valueFetched?: string
    type?: string
}

function InputForms<T>({ id, value, valueFetched, setAction, type }: inputFormsType<string>) {
    return (
        <Input
            id={id}
            type={type}
            className='py-1 px-1 dark:bg-slate-300 dark:text-neutral-800'
            value={value ? value : valueFetched}
            onChange={(e) => setAction(valueFetched ? valueFetched : e.target.value)}
        />
    )
}

function LabelForms({ children }: GenericsProps) {
    return (
        <Label>
            {children}
        </Label>
    )
}

export {
    FormEditor,
    InputForms,
    LabelForms
}