import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import GoogleAnalytics from './components/GoogleAnalytics'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com/'), // Update with your actual domain
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Adam Syahir - Software Engineer',
    template: '%s | Adam Syahir'
  },
  description: 'Software Engineer at Novosoft Resources. Building thoughtful digital experiences with modern web technologies. Specializing in React, Next.js, and UI component libraries.',
  keywords: ['Adam Syahir', 'Software Engineer', 'Software Developer', 'React Developer', 'Next.js', 'Web Development', 'Frontend Developer', 'Malaysia Developer'],
  authors: [{ name: 'Adam Syahir', url: 'https://github.com/adsyahir' }],
  creator: 'Adam Syahir',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com/',
    title: 'Adam Syahir - Software Engineer',
    description: 'Software Engineer at Novosoft Resources. Building thoughtful digital experiences with modern web technologies.',
    siteName: 'Adam Syahir',
    images: [
      {
        url: '/og-image.jpg', // Add an Open Graph image to /public folder
        width: 1200,
        height: 630,
        alt: 'Adam Syahir - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Syahir - Software Engineer',
    description: 'Software Engineer at Novosoft Resources. Building thoughtful digital experiences with modern web technologies.',
    images: ['/og-image.jpg'], // Add a Twitter card image to /public folder
    creator: '@yourtwitterhandle', // Update with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
        suppressHydrationWarning
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics
            GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          />
        )}
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
