import DashboardHeader from '../DashboardHeader'
import Footer from '../Footer'
import Sidebar from '../Sidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
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