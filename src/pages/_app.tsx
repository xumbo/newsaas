import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import { Sora } from 'next/font/google'
import { ThemeProvider } from '@/components/common/ThemeProvider'
import '@/styles/globals.css'

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={`${sora.variable} min-h-screen bg-background`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  )
} 