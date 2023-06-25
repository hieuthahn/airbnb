'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter()
  return (
    <Image 
        alt='logo'
        src={'/images/logo.png'}
        className="cursor-pointer"
        onClick ={() => router.push('/')}
        width={100}
        height={100}
        priority
    />
  )
}

export default Logo