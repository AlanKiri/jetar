'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          <TextEffect preset="fade" as="p" per="char" delay={0.3}>
            Alan Jetar
          </TextEffect>
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-500 dark:text-zinc-400"
          delay={0.3}
        >
          Web Developer
        </TextEffect>
      </div>
    </header>
  )
}
