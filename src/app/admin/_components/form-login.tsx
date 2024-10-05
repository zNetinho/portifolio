"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { GenericsProps } from '@/types/common'
import React, { LegacyRef } from 'react'

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserSchema, UserSchemaType } from '@/schemas/login-schema'

function FormLogin() {

    const { 
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<UserSchemaType>({
        resolver: zodResolver(UserSchema)
    })

    const onSubmit: SubmitHandler<UserSchemaType> = (data) => console.log(data)
    const tester = (data: UserSchemaType, e: any) => {
        e.preventDefault()
        onSubmit(data)
        console.log("Evento de submit");
        console.log(data);
      };
    
    return (
        <form
            className='flex flex-col gap-3'
            onSubmit={handleSubmit(tester)}
        >
            <div>
                <LabelComponent
                    htmlFor='emailInput'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                    Email
                </LabelComponent>
                <input
                    type='text'
                    id='emailInput'
                    {...register("email")}
                    className='py-1 px-1 w-full focus-visible:outline-0 focus-visible:border-0 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    
                />
                {errors.email && <p>{errors.email?.message}</p>}
            </div>
            <div>
                <LabelComponent
                    htmlFor='password'
                >
                    Password
                </LabelComponent>
                <input 
                    type='password'
                    id='passwordInput'
                    className='py-1 px-1 w-full focus-visible:outline-0 focus-visible:border-0 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    {...register("password")}
                />

            </div>
            <ButtonComponent
                type='submit'
            >
                Acessar
            </ButtonComponent>
        </form>
    )
}

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

type InputProps = {
    type?: string
    name?: string
    id?: string
    ref: LegacyRef<HTMLInputElement>
}

function InputComponent({ className, id = 'undefined', type = 'text', rest }: GenericsProps<InputProps>) {

    const { 
        register,
    } = useForm<UserSchemaType>({
        resolver: zodResolver(UserSchema)
    })

    return (
        <input
            type={type}
            id={id}
            className={cn(['text-sm font-medium py-1 px-1 w-full focus-visible:outline-0 focus-visible:border-0', className])}
            {...rest}
        />
    )
}

type ButtonProps = {
    type?: 'submit' | 'button' | 'reset'
}

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

export {
    FormLogin,
    LabelComponent,
    InputComponent,
    ButtonComponent
}
