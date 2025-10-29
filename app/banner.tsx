'use client'
import React from 'react'
import { STATUS } from './data'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/shadcn/button'

export const Banner = () => {
  const pathname = usePathname()

  if (STATUS.state !== 'open' || pathname !== '/') return undefined

  return (
    <div className="absolute h-full w-full z-10 pointer-events-none">
      <div className="sticky top-0 h-10 overflow-hidden pointer-events-auto">
        <div className="absolute inset-0 hazard-bg" />
        <div className="inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-between h-[70%] my-auto bg-[var(--hazard-stripe-color)]">
          <div />
          <h2 className="tracking-widest text-xl font-semibold text-black">
            Hi, i'm open to work. Let's meet!
          </h2>
          <div>
            <Button size={'icon'} className="mr-2 h-6 w-6">
              <CloseIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    role="img"
    aria-label="Close"
  >
    <title>Close</title>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)
