# NewSaaS

Plataforma SaaS de soluções em IA para gestão empresarial.

## 🚀 Stack Tecnológica

- Next.js 15.0.2
- Tailwind CSS
- TypeScript
- Auth0 (a ser implementado)

## 📁 Estrutura do Projeto

```
newsaas/
├── src/
│   ├── components/
│   │   ├── layout/        # Componentes de layout
│   │   │   ├── Header/
│   │   │   ├── DashboardHeader/
│   │   │   ├── Footer/
│   │   │   ├── Sidebar/
│   │   │   ├── PublicLayout/
│   │   │   └── DashboardLayout/
│   │   └── landing/      # Componentes da landing page
│   │       ├── Hero/
│   │       ├── Services/
│   │       ├── Cases/
│   │       └── RecentPosts/
│   ├── pages/
│   │   ├── _app.tsx      # Configuração Next.js
│   │   ├── index.tsx     # Landing page
│   │   ├── servicos/     # Páginas de serviços
│   │   └── dashboard/    # Área administrativa
│   └── styles/
│       └── globals.css   # Estilos globais
├── public/              # Arquivos estáticos
├── docs/               # Documentação
│   ├── DEVELOPMENT.md
│   ├── WORKFLOW.md
│   └── CONTRIBUTING.md
├── CHANGELOG.md        # Histórico de mudanças
├── CURRENT_STATUS.md   # Status atual do projeto
└── README.md          # Documentação principal
```

## 🚀 Começando

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Rode o projeto: `npm run dev`
4. Acesse: `http://localhost:3000`

## 📝 Documentação

- [Processo de Desenvolvimento](docs/DEVELOPMENT.md)
- [Guia de Contribuição](docs/CONTRIBUTING.md)
- [Workflow](docs/WORKFLOW.md)
- [Changelog](CHANGELOG.md)