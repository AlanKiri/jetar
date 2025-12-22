'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import { ToastContainer } from 'react-toastify'

export const Toast = () => {
  const { theme } = useTheme()

  return (
    <ToastContainer
      position="bottom-right"
      theme={theme}
      className={'border-zinc-100 dark:border-zinc-800'}
    />
  )
}
