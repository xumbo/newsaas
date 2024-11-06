import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Empresa */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Empresa
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/sobre" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block">
                Sobre
              </Link>
              <Link href="/blog" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block">
                Blog
              </Link>
              <Link href="/carreiras" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block">
                Carreiras
              </Link>
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Produtos
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/produtos" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block">
                Todos os Produtos
              </Link>
              <Link href="/precos" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block">
                Preços
              </Link>
            </div>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Suporte
            </h3>
            <div className="mt-4 space-y-4">
              <Link href="/ajuda" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block">
                Central de Ajuda
              </Link>
              <Link href="/contato" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block">
                Contato
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Redes Sociais
            </h3>
            <div className="mt-4 space-y-4">
              <a href="https://twitter.com/newsaas" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block">
                Twitter
              </a>
              <a href="https://linkedin.com/company/newsaas" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white block">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 NewSaaS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 