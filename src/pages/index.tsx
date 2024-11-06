import { Header } from '@/components/layout/Header'
import { Hero } from '@/components/landing/Hero'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* Outras seções serão adicionadas aqui */}
      </main>
      <Footer />
    </div>
  )
} 