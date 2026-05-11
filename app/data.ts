import cv from '@/public/alan_jetar_cv.pdf'
import moment from 'moment'

type CvType = {
  link: string
  updated: Date
  cv_outdated: boolean
}

type StatusType = {
  state?: 'open'
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
  updated: new Date('2026-05-11'),
  cv_outdated: false,
}

export const STATUS: StatusType = {
  state: 'open',
}

export const PROJECTS: Project[] = []

const PROFESSIONAL_WORK_START = '2022.09'

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'SeekBetter (UAB Umina)',
    title: 'Fullstack Web Developer',
    start: PROFESSIONAL_WORK_START,
    end: '2026.06',
    link: 'https://www.seekbetter.eu/',
    id: 'seekbetter',
    page: true,
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

export const YEARS_OF_EXPERIENCE = moment().diff(
  moment(PROFESSIONAL_WORK_START, 'YYYY.MM'),
  'years',
)
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
