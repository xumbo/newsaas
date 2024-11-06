import Link from 'next/link'

const DashboardHeader = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/dashboard" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">NewSaaS</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              <span className="sr-only">Notificações</span>
              {/* Ícone de sino */}
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            <button className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-gray-200 dark:bg-gray-700">
              <span className="sr-only">Perfil</span>
              <span className="text-sm font-medium">U</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default DashboardHeader 