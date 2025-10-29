import Image from 'next/image'
import Link from 'next/link'
import flag from '@/public/lithuania.svg'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/shadcn/tooltip'

export function Header() {
  return (
    <header className="mb-4 flex items-center justify-between">
      <div>
        <div className="flex gap-2">
          <Link href="/" className="font-medium text-black dark:text-white">
            <p>Alan Jetar</p>
          </Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={flag}
                  alt="National Lithuanian flag"
                  width={24}
                  className="h-4 my-auto cursor-pointer rounded-xs"
                />
              </TooltipTrigger>
              <TooltipContent>Nationality: Lithuanian</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-zinc-500 dark:text-zinc-400">Web Developer</p>
      </div>
    </header>
  )
}
