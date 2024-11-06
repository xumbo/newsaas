import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">NewSaaS</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link href="/produtos" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Produtos
            </Link>
            <Link href="/servicos" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Serviços
            </Link>
            <Link href="/blog" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Blog
            </Link>
            <Link href="/sobre" className="text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Sobre
            </Link>
            <Link href="/login" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header 