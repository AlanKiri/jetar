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

export const PROJECTS: Project[] = []

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
