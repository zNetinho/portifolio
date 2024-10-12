import { Input, InputProps } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { UserSchema, UserSchemaType } from '@/schemas/login-schema';
import { GenericsProps } from '@/types/common'
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';

function InputComponentEmail({ className, id = 'undefined', type = 'text', ...rest}: GenericsProps<InputProps>) {
    const { 
        register
    } =  useForm<UserSchemaType>({
        resolver: zodResolver(UserSchema)
    })

    return (
        <Input
            type={type}
            id={id}
            className={cn(['text-sm font-medium py-1 px-1 w-full focus-visible:outline-0 focus-visible:border-0', className])}
            ref={register('email').ref}
        />
    )
}

function InputComponentPassword({ className, id = 'undefined', type = 'text', ...rest}: GenericsProps<InputProps>) {
    const { 
        register
    } =  useForm<UserSchemaType>({
        resolver: zodResolver(UserSchema)
    })
    
    return (
        <Input
            type={'password'}
            id={id}
            className={cn(['text-sm font-medium py-1 px-1 w-full focus-visible:outline-0 focus-visible:border-0', className])}
            ref={register('password').ref}
        />
    )
}


export {
    InputComponentEmail,
    InputComponentPassword
}
