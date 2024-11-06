import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import PublicLayout from '@/components/layout/PublicLayout'
import DashboardLayout from '@/components/layout/DashboardLayout'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import { Sora } from 'next/font/google'
import '@/styles/globals.css'

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
})

const publicPaths = ['/', '/produtos', '/servicos', '/sobre']

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isPublicPage = publicPaths.includes(router.pathname)

  return (
    <ThemeProvider>
      <div className={`${sora.variable} min-h-screen bg-background`}>
        {isPublicPage ? (
          <PublicLayout>
            <Component {...pageProps} />
          </PublicLayout>
        ) : (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        )}
      </div>
    </ThemeProvider>
  )
} 