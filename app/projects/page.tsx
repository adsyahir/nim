'use client'
import { motion } from 'motion/react'
import { XIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { PROJECTS } from '../data'

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

type ProjectImageProps = {
  images: string[]
  alt: string
}

function ProjectImage({ images, alt }: ProjectImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const hasMultipleImages = images.length > 1

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        <Image
          src={images[0]}
          alt={alt}
          width={800}
          height={450}
          className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative mx-4 max-h-[85vh] max-w-[95vw] rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50 md:mx-0 md:max-w-[85vw]">
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            width={1920}
            height={1080}
            className="h-auto w-full max-h-[80vh] rounded-xl object-contain"
          />
          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-zinc-50 transition-colors dark:bg-zinc-800 dark:hover:bg-zinc-700"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-zinc-50 transition-colors dark:bg-zinc-800 dark:hover:bg-zinc-700"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-white dark:bg-zinc-100'
                        : 'w-2 bg-white/60 dark:bg-zinc-100/60 hover:bg-white/80 dark:hover:bg-zinc-100/80'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export default function Portfolio() {
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
        <h1 className="mb-8 text-3xl font-medium">Projects</h1>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          A collection of projects I've worked on, ranging from websites
          to full-scale web applications. Each project represents a unique challenge and
          learning experience.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <div key={project.name} className="space-y-3">
              <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                <ProjectImage
                  images={project.images || [project.image]}
                  alt={project.name}
                />
              </div>
              <div className="px-1 space-y-3">
                <div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {project.type} · {project.client}
                  </p>
                </div>
                <div className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                  <p>{project.languages.join(', ')}</p>
                  <div className="flex gap-3">
                    {project.preview && (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        Preview →
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        Github →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
