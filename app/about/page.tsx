'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import me from '../../public/me.jpg'
const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function About() {
  return (
    <motion.main
      className="space-y-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h1 className="mb-8 text-3xl font-medium">About Me</h1>

        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-shrink-0">
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-900 dark:ring-zinc-800/50">
              {/* Replace the src with your actual image path */}
              <Image
                src="/me/adam.jpg"
                alt="Adam Syahir"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <p className="text-zinc-600 dark:text-zinc-400">
              Hi, I'm Adam Syahir, a software engineer at Novosoft Resources who
              loves building clean, functional web applications.
            </p>

            <p className="text-zinc-600 dark:text-zinc-400">
              I started my development journey in 2021, learning frontend
              development and building responsive websites. In 2022, I joined
              FAR Capital as an intern and quickly became a Junior Developer,
              working on web applications and UI libraries.
            </p>

            <p className="text-zinc-600 dark:text-zinc-400">
              In 2024, I explored DevOps at Yayasan Peneraju and earned two
              certifications. Now at Novosoft Resources, I work on multiple
              client projects, creating solutions that meet their needs.
            </p>

            <p className="text-zinc-600 dark:text-zinc-400">
              I'm passionate about modern web technologies and design systems. I
              believe in writing clean, maintainable code and creating user
              experiences that feel natural. When I'm not coding, I enjoy
              exploring new tech, hitting the gym, playing games and badminton with friends.
            </p>
          </div>
        </div>
      </motion.section>
    </motion.main>
  )
}
