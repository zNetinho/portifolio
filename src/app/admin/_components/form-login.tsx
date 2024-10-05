import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { GenericsProps } from '@/types/common'
import React from 'react'

function FormLogin() {
    return (
        <form
            action=""
            method="post"
            className='flex flex-col gap-3'
        >
            <div>
                <LabelComponent
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Email
                </LabelComponent>
                <InputComponent
                    type="text"
                    name="email"
                    id="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                />
            </div>
            <div>
                <LabelComponent
                    htmlFor="password"
                >
                    Password
                </LabelComponent>
                <InputComponent type="text" name="password" id="password" />

            </div>
                <ButtonComponent>
                    Acessar
                </ButtonComponent>
        </form>
    )
}

type LabelProps = {
    htmlFor?: string
}

function LabelComponent({ children, className, htmlFor }: GenericsProps<LabelProps>) {
    return (
        <Label
            htmlFor={htmlFor}
            className={cn(['text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className])}
        >
            {children}
        </Label>
    )
}

type InputProps = {
    type?: string
    name?: string
    id?: string
}

function InputComponent({ className, id, name, type }: GenericsProps<InputProps>) {
    return (
        <Input
            type={type}
            name={name}
            id={id}
            className={cn(['text-sm font-medium py-1 px-1 w-full focus-visible:outline-0', className])}
        />
    )
}

function ButtonComponent({ children, className }: GenericsProps) {
    return (
        <Button
            className={cn(['w-full', className])}
        >
            {children}
        </Button>
    )
}

export {
    FormLogin,
    LabelComponent,
    InputComponent,
    ButtonComponent
}