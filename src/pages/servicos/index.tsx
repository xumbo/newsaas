import { NextPage } from 'next'

const ServicesPage: NextPage = () => {
  return (
    <>
      {/* Hero dos Serviços */}
      <section className="relative bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Soluções Inteligentes para</span>
              <span className="block text-indigo-600">Cada Necessidade</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Conheça nosso portfólio completo de serviços em IA e automação.
              Soluções personalizadas para impulsionar seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Serviços Detalhada */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {/* Serviço 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">IA para Análise de Dados</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Transforme dados brutos em insights acionáveis com nossa plataforma 
                  de análise alimentada por IA. Identifique padrões, preveja tendências 
                  e tome decisões baseadas em dados.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Análise preditiva avançada
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Dashboards personalizados
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Relatórios automatizados
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
                <div className="text-6xl text-center">📊</div>
              </div>
            </div>

            {/* Serviço 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Automação de Processos</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Automatize tarefas repetitivas e otimize seus processos empresariais 
                  com nossa solução de automação inteligente. Aumente a eficiência e 
                  reduza erros.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Workflows automatizados
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Integração com sistemas existentes
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span>
                    Monitoramento em tempo real
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
                <div className="text-6xl text-center">⚡</div>
              </div>
            </div>

            {/* Adicionar mais serviços seguindo o mesmo padrão */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto para começar?</h2>
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Fale com um especialista
          </button>
        </div>
      </section>
    </>
  )
}

export default ServicesPage 