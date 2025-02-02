import UserAvatar from '@/components/user/avatar'
import { SignIn, SignOutButton } from '@clerk/clerk-react'
import { useAuth } from '@clerk/nextjs'
import React from 'react'

function LoginWithClerk() {
    const { isLoaded, sessionId, getToken } = useAuth()

    if (!sessionId || !isLoaded) {
        return (
            <main className="flex items-center justify-center md:h-screen">
                <div className="relative mx-auto flex w-full flex-col space-y-2.5 p-4 md:-mt-32">
                    <div className="py-2 flex flex-col items-center">
                        <h1>Bem vindo 😎 </h1>
                    </div>
                    <div className="flex w-full justify-center items-center">
                        <SignIn routing="hash" />
                    </div>
                </div>
            </main>
        )
    }

    return (
        <SignOutButton />
    )
}

export default LoginWithClerk