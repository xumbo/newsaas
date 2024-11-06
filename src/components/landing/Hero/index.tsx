import Link from 'next/link'

const Hero = () => {
  return (
    <div className="relative bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">Revolucione a gestão da sua empresa com</span>
            <span className="block text-indigo-600">Inteligência Artificial</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transforme sua empresa com nossas soluções SaaS. 
            Ferramentas poderosas para impulsionar seu crescimento.
          </p>
          <div className="mt-8">
            <Link 
              href="/servicos" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Conheça o que podemos fazer pela sua empresa
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
