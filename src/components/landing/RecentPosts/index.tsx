const RecentPosts = () => {
  const posts = [
    {
      title: "O Futuro da IA na Gestão Empresarial",
      excerpt: "Como a inteligência artificial está transformando a tomada de decisões",
      date: "2024-03-15",
      author: "Maria Silva",
      image: "🤖"
    },
    {
      title: "Automação Inteligente: Guia Completo",
      excerpt: "Descubra como implementar automação em sua empresa",
      date: "2024-03-14",
      author: "João Santos",
      image: "⚡"
    },
    {
      title: "Machine Learning na Prática",
      excerpt: "Cases reais de implementação de ML em empresas",
      date: "2024-03-13",
      author: "Ana Costa",
      image: "🧠"
    },
    {
      title: "Análise Preditiva para Negócios",
      excerpt: "Como prever tendências com precisão usando IA",
      date: "2024-03-12",
      author: "Pedro Lima",
      image: "📊"
    },
    {
      title: "Chatbots Avançados com IA",
      excerpt: "Melhorando o atendimento com inteligência artificial",
      date: "2024-03-11",
      author: "Clara Rocha",
      image: "���"
    },
    {
      title: "Big Data e IA: O Poder dos Dados",
      excerpt: "Como combinar big data e IA para resultados excepcionais",
      date: "2024-03-10",
      author: "Lucas Mendes",
      image: "📈"
    }
  ]

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="text-4xl mb-4">{post.image}</div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentPosts 