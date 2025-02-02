'use client'
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

function UserAvatar() {

  const { user, isLoaded } = useUser()
  const username = user?.firstName
  const imgUrl = user?.imageUrl

  return (
    <div className={`${user ? 'flex' : 'hidden'} flex-col items-center`}>
      {!isLoaded ? (
        <SkeletonAvatar />
      ) : (
        <>
          <Image
            className="rounded-full"
            src={imgUrl || ''}
            alt={`Imagem do usuário: ${username}`}
            loading="eager"
            width={40}
            height={40}
          />
          <h2>{username}</h2>
        </>
      )}
    </div>
  )
}

function SkeletonAvatar() {
  return (
    <div className="flex gap-[4px] flex-col">
      <div className="animate-pulse bg-gray-200 h-10 w-10 rounded-full"></div>
      <div className="h-[12px] rounded-full bg-gray-200 animate-pulse"></div>
    </div>
  )
}

export default UserAvatar
