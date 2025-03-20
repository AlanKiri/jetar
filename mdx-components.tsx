import type { MDXComponents } from 'mdx/types'
import { useTheme } from 'next-themes'
import { ThemeImage } from './components/ui/theme-image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      light,
      dark,
      caption,
      ...props
    }: {
      light: string
      dark: string
      alt: string
      height: number
      caption: string
    }) => {
      return (
        <figure>
          <ThemeImage
            dark={dark}
            light={light}
            className="rounded-xl object-contain w-full"
            {...props}
          />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
  }
}
