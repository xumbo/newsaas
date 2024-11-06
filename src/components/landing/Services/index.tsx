const Services = () => {
  const services = [
    {
      title: "IA para Análise de Dados",
      description: "Transforme dados em insights acionáveis com nossa IA avançada",
      icon: "📊"
    },
    {
      title: "Automação de Processos",
      description: "Otimize operações com automação inteligente",
      icon: "⚡"
    },
    {
      title: "Previsão de Demanda",
      description: "Antecipe tendências com modelos preditivos",
      icon: "📈"
    },
    {
      title: "Atendimento Inteligente",
      description: "Chatbots e assistentes virtuais com IA",
      icon: "💬"
    },
    {
      title: "Gestão de Documentos",
      description: "Processamento inteligente de documentos",
      icon: "📄"
    },
    {
      title: "BI Avançado",
      description: "Dashboards inteligentes e relatórios automatizados",
      icon: "📱"
    }
  ]

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 