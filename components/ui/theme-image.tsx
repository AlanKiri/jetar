'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ThemeImageProps {
  light?: string
  dark?: string
  height?: number
  alt?: string
  className?: string
}

export const ThemeImage = ({ dark, light, ...props }: ThemeImageProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent SSR rendering altogether
  if (!mounted || !resolvedTheme) return null

  return (
    <img
      src={resolvedTheme === 'dark' ? dark : light}
      alt={props.alt || 'Themed image'}
      height={props.height}
      className={props.className}
      {...props}
    />
  )
}
