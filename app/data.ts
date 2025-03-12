import cv from '@/public/alan_jetar_cv.pdf'

type CvType = {
  link: string
  updated: Date
}

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const CV: CvType = {
  link: cv,
  updated: new Date('2025-03-12'),
}

export const PROJECTS: Project[] = [
  {
    id: 'Coming Soon',
    link: '/',
    name: 'Coming Soon',
    description:
      'Migrating projects into this portfolio requires time and effort. Stay tuned!',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA1',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'SeekBetter (UAB Umina)',
    title: 'Fullstack Web Developer',
    start: '2022.09',
    end: 'Present',
    link: 'https://www.seekbetter.eu/',
    id: 'seekbetter',
  },
  {
    company: 'NKKM',
    title: 'Programming Lecturer',
    start: '2025.01',
    end: 'Present',
    link: 'https://nkkm.lt/',
    id: 'nkkm',
  },
]

export const BLOG_POSTS: BlogPost[] = []

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/AlanKiri',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/alanjetar/',
  },
]

export const EMAIL = 'alankonnect@gmail.com'
