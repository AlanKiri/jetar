import Link from 'next/link'

export const metadata = {
  title: '404',
}

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center space-y-4 py-24 text-center">
      <p className="text-4xl font-medium text-zinc-900 dark:text-zinc-100">
        404
      </p>
      <p className="text-zinc-600 dark:text-zinc-400">
        The TCP handshake failed, you're rejected. If we were in UDP, you
        wouldn&apos;t even care.
      </p>
      <p className="text-6xl dark:hidden">( ͡° ͜ʖ ͡°)</p>
      <p className="hidden text-6xl dark:block">ಠ_ಠ</p>
      <Link
        href="/"
        className="text-sm text-zinc-500 underline transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        Try again?
      </Link>
    </main>
  )
}
