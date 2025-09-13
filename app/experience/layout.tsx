'use client'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { EMAIL, WORK_EXPERIENCE } from '../data'
import { usePathname } from 'next/navigation'

export default function LayoutExperiencePost({
  children,
}: {
  children: React.ReactNode
}) {
  // Retrieve current page id
  const pathname = usePathname()
  const jobId = pathname.split('/').pop()
  const experience = WORK_EXPERIENCE.find((job) => job.id == jobId)

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{
          bounce: 0,
        }}
      />
      <div className="absolute right-4 top-20">
        <h1 className="text-black dark:text-white">{experience?.company!}</h1>

        <p className="text-zinc-500 dark:text-zinc-400">
          {`${experience?.start!} - ${experience?.end!}`}
        </p>
      </div>

      <main className="prose prose-gray mt-12 mb-12 prose-h4:prose-base dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
        {children}
      </main>
      <footer>
        Thanks for reading, if you're interested in working together contact me
        here:{' '}
        <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
      </footer>
    </>
  )
}
