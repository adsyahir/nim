type Project = {
  name: string
  description: string
  type: string
  client: string
  languages: string[]
  preview?: string
  github?: string
  link: string
  video: string
  image: string
  images?: string[]
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

type Certification = {
  title: string
  organization: string
  year: string
  link?: string
  uid: string
}

type TechStack = {
  name: string
  category: string
  icon?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Borak',
    description: 'Real-time chat application with end-to-end encryption for secure messaging.',
    type: 'Web Application',
    client: 'Personal',
    languages: ['Next.js', 'Node.js', 'WebSockets'],
    preview: 'https://borak-staging.adsyahir.com/',
    github: 'https://github.com/adsyahir/borak',
    link: 'https://borak-staging.adsyahir.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    image: '/img/borak.png',
    id: 'project-borak',
  },
  {
    name: 'SnapWiFi',
    description: 'Generate QR codes from WiFi credentials for easy network sharing.',
    type: 'Web Application',
    client: 'Personal',
    languages: ['Nuxt.js', 'Vue.js', 'JavaScript'],
    preview: 'https://snapwifi.adsyahir.com/',
    github: 'https://github.com/adsyahir/snapwifi',
    link: 'https://snapwifi.adsyahir.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    image: '/img/snapwifi.png',
    images: ['/img/snapwifi.png'],
    id: 'project0',
  },
  {
    name: 'Kad Kahwin Digital',
    description: 'A beautiful and interactive digital wedding invitation.',
    type: 'Website',
    client: 'Personal',
    languages: ['ReactJS'],
    preview: 'https://kad-kahwin-digital-adsyahir.netlify.app',
    github: 'https://github.com/adsyahir/digital-wedding-card',
    link: 'https://github.com/adsyahir/digital-wedding-card',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    image: '/img/kad-kahwin.png',
    id: 'project1',
  },
  {
    name: 'IP Address Tracker',
    description: 'Track and locate IP addresses with an interactive map interface.',
    type: 'Web Application',
    client: 'Frontend Mentor Challenge',
    languages: ['HTML', 'CSS', 'JavaScript', 'API'],
    preview: 'https://ip-address-tracker-adsyahir.netlify.app',
    github: 'https://github.com/adsyahir/digital-wedding-card',
    link: 'https://ip-address-tracker-adsyahir.netlify.app',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    image: '/img/ip-address-tracker.png',
    id: 'project2',
  },
  {
    name: 'Medire: Medication Reminder with OCR',
    description: 'Mobile application for medication reminders with OCR technology.',
    type: 'Mobile Application',
    client: 'Final Year Project',
    languages: ['React Native'],
    github: 'https://github.com/adsyahir/medirev2',
    link: 'https://github.com/adsyahir/medirev2',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    image: '/img/medire.png',
    images: ['/img/medire-1.jpg', '/img/medire-2.jpg', '/img/medire-3.jpg'],
    id: 'project3',
  },
  {
    name: 'Malaysia Prayer Times',
    description: 'Prayer times application for Malaysia.',
    type: 'Website',
    client: 'Personal',
    languages: ['ReactJS', 'API'],
    preview: 'https://malaysia-prayer-times-adsyahir.netlify.app/',
    github: 'https://github.com/adsyahir/waktu-solat',
    link: 'https://malaysia-prayer-times-adsyahir.netlify.app/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    image: '/img/waktu-solat.png',
    images: ['/img/waktu-solat.png', '/img/waktu-solat-1.png'],
    id: 'project4',
  },
  {
    name: 'Sunnyside Agency Landing Page',
    description: 'Modern and responsive agency landing page.',
    type: 'Website',
    client: 'Frontend Mentor Challenge',
    languages: ['HTML', 'CSS', 'JavaScript'],
    preview: 'https://sunnyside-agency-landing-page-adsyahir.netlify.app/',
    github: 'https://github.com/adsyahir/sunnyside-agency-landing-page-main',
    link: 'https://sunnyside-agency-landing-page-adsyahir.netlify.app/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    image: '/img/sunny-side.png',
    images: ['/img/sunnyside-1.png', '/img/sunnyside-2.png', '/img/sunnyside-3.png'],
    id: 'project5',
  },
  {
    name: 'Parcel Management System',
    description: 'Complete parcel tracking and management solution.',
    type: 'Website & Web Application',
    client: 'Personal',
    languages: ['HTML', 'CSS', 'JavaScript', 'Java', 'Oracle', 'MySQL'],
    preview: 'https://speed-post-adsyahir.netlify.app',
    github: 'https://github.com/adsyahir/courier-website',
    link: 'https://speed-post-adsyahir.netlify.app',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    image: '/img/speed-post.png',
    images: ['/img/speed-post-1.png', '/img/speed-post-2.png', '/img/speed-post-3.png'],
    id: 'project6',
  },
  {
    name: 'Tip Calculator',
    description: 'Interactive tip calculator application.',
    type: 'Web Application',
    client: 'Frontend Mentor Challenge',
    languages: ['ReactJS'],
    preview: 'https://tip-calculator-main-adsyahir.netlify.app',
    github: 'https://github.com/adsyahir/tip-calculator-main',
    link: 'https://tip-calculator-main-adsyahir.netlify.app',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    image: '/img/tip-calculator-main.png',
    id: 'project7',
  },
  {
    name: 'Calculator App',
    description: 'Functional calculator with theme switching.',
    type: 'Web Application',
    client: 'Frontend Mentor Challenge',
    languages: ['ReactJS'],
    preview: 'https://calculator-app-main-adsyahir.netlify.app',
    github: 'https://github.com/adsyahir/calculator-app-main',
    link: 'https://calculator-app-main-adsyahir.netlify.app',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    image: '/img/calculator.png',
    images: ['/img/cal-1.png', '/img/cal-2.png', '/img/cal-3.png'],
    id: 'project8',
  },
  {
    name: 'Agent Management System',
    description: 'Complete agent management solution for AF Vision Sdn Bhd.',
    type: 'Web Application',
    client: 'AF Vision Sdn Bhd',
    languages: ['HTML', 'CSS', 'JavaScript', 'Java', 'MySQL'],
    preview: 'https://agent-management-systems.herokuapp.com/',
    github: 'https://github.com/adsyahir/ams',
    link: 'https://agent-management-systems.herokuapp.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    image: '/img/ams.png',
    images: ['/img/ams-1.png', '/img/ams-2.png', '/img/ams-3.png'],
    id: 'project9',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Novosoft Resources Sdn Bhd',
    title: 'Software Engineer',
    start: 'Jan 2025',
    end: 'Present',
    link: 'https://novosoft.dev',
    id: 'work1',
  },
  {
    company: 'FAR Capital Sdn Bhd',
    title: 'Junior Developer',
    start: 'Feb 2023',
    end: 'Dec 2024',
    link: 'https://farcapital.com.my',
    id: 'work2',
  },
  {
    company: 'FAR Capital Sdn Bhd',
    title: 'Intern Tech Team',
    start: 'Sept 2022',
    end: 'Jan 2023',
    link: 'https://farcapital.com.my',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/adsyahir',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/adam-syahir-025966242',
  },
]

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'BIS (Hons.) Information Systems Engineering',
    organization: 'UiTM Jasin, Melaka',
    year: '2020 - 2023',
    uid: 'edu-1',
  },
  {
    title: 'Certified Devops Foundation',
    organization: 'Convergence Certification and Skill Development Council',
    year: '2024',
    link: '#',
    uid: 'cert-1',
  },
  {
    title: 'Certified Kubernetes Administrator',
    organization: 'The Linux Foundation',
    year: '2024 - 2026',
    uid: 'cert-2',
  },
]

export const TECH_STACK: TechStack[] = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Nuxt.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'Java Spring', category: 'Backend · Learning' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Jenkins', category: 'DevOps' },
  { name: 'Prometheus', category: 'Monitoring' },
  { name: 'Grafana', category: 'Monitoring' },
  { name: 'Claude Code', category: 'AI Assistant' },

]

export const EMAIL = 'adsyahir16@gmail.com'
