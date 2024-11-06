import Header from '../Header'
import Footer from '../Footer'
import Sidebar from '../Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-background">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
} 