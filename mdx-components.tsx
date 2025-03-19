import type { MDXComponents } from 'mdx/types'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './components/shadcn/carousel'
import { Comparison } from './components/ui/comparison'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img
            src={src}
            alt={alt}
            className="rounded-xl object-contain w-full"
          />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    Comparison: ({
      images,
    }: {
      images: { id: string; material: string[] }[]
    }) => {
      return (
        <Carousel>
          <CarouselContent>
            {images.map((comparisonImages, index) => (
              <CarouselItem className="flex justify-center" key={index}>
                <Comparison images={comparisonImages} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )
    },
  }
}
