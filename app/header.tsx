'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex flex-col gap-16">
      <nav className="flex items-center justify-start gap-6">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          Projects
        </Link>
        <Link
          href="/specification"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-white"
        >
          Specification
        </Link>
      </nav>
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Adam Syahir
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Developer
        </TextEffect>
      </div>
    </header>
  )
}
