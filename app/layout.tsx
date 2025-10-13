import type { Metadata } from 'next'
import { Nunito_Sans, Roboto } from 'next/font/google'
import './globals.css'

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Launch HQ Stack Flight Plan',
  description: 'Self-serve automation blueprint generator for Canadian founders.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${roboto.variable}`}>
      <body className="min-h-screen bg-neutral-50 text-ink">
        <div className="relative flex min-h-screen flex-col">
          <header className="border-b border-neutral-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gradient-brand" />
                <span className="font-display text-xl font-bold text-brand-blue">
                  Launch HQ Stack Flight Plan
                </span>
              </div>
              <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex">
                <a href="/wizard" className="transition hover:text-brand-blue">Launch the Wizard</a>
                <a href="/admin" className="transition hover:text-brand-blue">Admin</a>
              </nav>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-neutral-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Launch HQ. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="transition hover:text-brand-blue">Privacy</a>
                <a href="#" className="transition hover:text-brand-blue">Terms</a>
                <a href="#" className="transition hover:text-brand-blue">Security</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
