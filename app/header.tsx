import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-4 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          <p>Alan Jetar</p>
        </Link>
        <p className="text-zinc-500 dark:text-zinc-400">Web Developer </p>
      </div>
    </header>
  )
}
