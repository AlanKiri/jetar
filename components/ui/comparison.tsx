'use client'
import { cn } from '@/lib/utils'
import { useCallback, useState, useEffect, useRef } from 'react'
import { useCarousel } from '../shadcn/carousel'

type ComparisonProps = { images: { id: string; material: string[] } }

export const Comparison = ({ images }: ComparisonProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollNext, scrollPrev } = useCarousel()

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === ' ') {
        event.preventDefault()
        setActiveIndex((value) => (value === 0 ? 1 : 0))
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [],
  )

  return (
    <div className="relative" onKeyDown={handleKeyDown} tabIndex={0} autoFocus>
      <img src={images.material[activeIndex]} />
      <div className="absolute bottom-10 w-full flex justify-center gap-1">
        {images.material.map((_, index) => (
          <div
            className={cn(
              'group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 py-1.25 px-2 text-sm text-black transition-colors duration-200 hover:bg-zinc-300 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700',
              activeIndex === index ? 'bg-zinc-500' : undefined,
            )}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
