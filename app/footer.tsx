'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'
import { SESSIONSTORAGE_KEYS, STATUS } from './data'
import { toast } from 'react-toastify'
import { redirect } from 'next/navigation'
import { GlowEffect } from '@/components/motion-primitives/glow-effect'
import { cn } from '@/lib/utils'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const openToWorkToastId = useRef<any>(null)

  useEffect(() => {
    if (STATUS.state === 'open') {
      const isNotificationSeenStr = sessionStorage.getItem(
        SESSIONSTORAGE_KEYS.isOpenToWorkNotificationSeen,
      )
      const isNotificationSeen = isNotificationSeenStr
        ? JSON.parse(isNotificationSeenStr)
        : null

      console.log({ resolvedTheme })
      if (!isNotificationSeen)
        openToWorkToastId.current = toast(
          <>
            <GlowEffect
              colors={
                resolvedTheme === 'dark'
                  ? ['#005c54', '#024463', '#013975', '#00218c']
                  : ['#e6fffd', '#e6f7ff', '#e6f2ff', '#e6ecff']
              }
              mode="colorShift"
              blur="soft"
              duration={3}
              scale={1}
            />
            <div
              className={'font-semibold z-10 text-zinc-500 dark:text-zinc-100'}
            >
              Hi, i'm currently open to work!
            </div>
          </>,
          {
            autoClose: 10000,
            onClick: () => {
              sessionStorage.setItem(
                SESSIONSTORAGE_KEYS.isOpenToWorkNotificationSeen,
                'true',
              )
              redirect('/opentowork')
            },
            className:
              'cursor-pointer border-1 border-zinc-100 dark:border-zinc-800',
            type: 'info',
            onClose: () => {
              sessionStorage.setItem(
                SESSIONSTORAGE_KEYS.isOpenToWorkNotificationSeen,
                'true',
              )
            },
          },
        )
    }
  }, [])

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg  bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        toast.dismiss(openToWorkToastId.current)
        sessionStorage.setItem(
          SESSIONSTORAGE_KEYS.isOpenToWorkNotificationSeen,
          'true',
        )
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <a href="https://github.com/AlanKiri/jetar" target="_blank">
          <TextLoop className="text-xs text-zinc-500">
            <span>© 2025 Alan Jetar.</span>
            <span>Built with ibelick/nim.</span>
          </TextLoop>
        </a>
        <div className="text-xs text-zinc-400">
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
