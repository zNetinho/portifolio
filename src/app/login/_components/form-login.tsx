"use client"

import { authenticate } from '@/lib/actions'
import { UserSchema, UserSchemaType } from '@/schemas/login-schema'
import { onSubmit } from '@/services/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFormState } from 'react-dom'
import { useForm } from 'react-hook-form'
import ButtonComponent from './button-component'
import LabelComponent from './label-component'

function FormLogin() {

    const [errorMessage, formAction, isPending] = useFormState(
        authenticate,
        undefined,
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserSchemaType>({
        resolver: zodResolver(UserSchema)
    })


    return (
        <form
            className='flex flex-col gap-3'
            onSubmit={handleSubmit(onSubmit)}
            action={formAction}
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
                    id='email'
                    {...register("email")}
                    className='py-1 px-1 w-full focus-visible:outline-0 focus-visible:border-0 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                />
                {errors.email && <p className='text-xs text-neutral-500'>{errors.email?.message}</p>}
            </div>
            <div>
                <LabelComponent
                    htmlFor='password'
                >
                    Password
                </LabelComponent>
                <input
                    type='password'
                    id='password'
                    className='py-1 px-1 w-full focus-visible:outline-0 focus-visible:border-0 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    {...register("password")}
                />
                {errors.password && <p className='text-xs text-neutral-500'>{errors.password?.message}</p>}

            </div>
            <ButtonComponent
                type='submit'
                aria-disabled={isPending}
            >
                Acessar
            </ButtonComponent>

            {errorMessage && (
                <>
                    <span className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                </>
            )}
        </form>
    )
}

export {
    FormLogin
}
