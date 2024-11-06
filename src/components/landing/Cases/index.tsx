const Cases = () => {
  const cases = [
    {
      company: "TechCorp",
      result: "Aumento de 150% em eficiência operacional",
      description: "Implementação de IA para automação de processos internos",
      logo: "🏢"
    },
    {
      company: "DataFlow",
      result: "Redução de 60% em custos operacionais",
      description: "Sistema de análise preditiva para gestão de recursos",
      logo: "📊"
    },
    {
      company: "SmartRetail",
      result: "Aumento de 80% em satisfação do cliente",
      description: "Atendimento automatizado com IA conversacional",
      logo: "🛍️"
    }
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Cases de Sucesso</h2>
        <div className="flex overflow-x-auto space-x-8 pb-8">
          {cases.map((case_, index) => (
            <div key={index} className="flex-none w-96 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">{case_.logo}</div>
              <h3 className="text-xl font-semibold mb-2">{case_.company}</h3>
              <p className="text-indigo-600 font-semibold mb-2">{case_.result}</p>
              <p className="text-gray-600 dark:text-gray-400">{case_.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases 