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
  page: boolean // Indicates if dedicated page exists.
  tech_stack?: {
    front_end: { id: string; label: string }[]
    back_end: { id: string; label: string }[]
    database: { id: string; label: string }[]
    deployments: { id: string; label: string }[]
  }
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
  updated: new Date('2025-06-18'),
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
    page: true,
    tech_stack: {
      front_end: [
        { id: 'react', label: 'React' },
        { id: 'mui', label: 'Material UI' },
        { id: 'tailwind', label: 'Tailwind CSS' },
        { id: 'redux', label: 'Redux' },
        { id: 'tanstack', label: 'Tanstack' },
        { id: 'framer', label: 'Framer' },
        { id: 'i18next', label: 'I18Next' },
        { id: 'zod', label: 'Zod' },
      ],
      back_end: [
        { id: 'php', label: 'PHP' },
        { id: 'wordpress', label: 'Wordpress' },
        { id: 'express', label: 'Express JS' },
        { id: 'node', label: 'Node JS' },
        { id: 'stripe', label: 'Stripe' },
      ],
      database: [
        { id: 'mysql', label: 'MySQL' },
        { id: 'mongo', label: 'Mongo DB' },
      ],
      deployments: [
        { id: 'docker', label: 'Docker' },
        { id: 'ubuntu', label: 'Ubuntu Linux' },
        { id: 'web_servers', label: 'Web Servers' },
      ],
    },
  },
  {
    company: 'NKKM',
    title: 'Programming Lecturer',
    start: '2025.01',
    end: '2025.06',
    link: 'https://nkkm.lt/',
    id: 'nkkm',
    page: false,
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
