import type { MDXComponents } from 'mdx/types'
import { ThemeImage } from './components/ui/theme-image'
import { PropsWithChildren, ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'

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
    Indent: ({ children }: PropsWithChildren) => {
      return <div className="ml-4">{children}</div>
    },
    // code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    //   const codeHTML = highlight(children as string)
    //   return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    // },
  }
}
