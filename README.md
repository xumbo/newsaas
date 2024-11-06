# NewSaaS

Um SaaS moderno construído com Next.js, Tailwind CSS e Auth0.

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
│   │   ├── common/        # Componentes reutilizáveis
│   │   │   ├── Button
│   │   │   ├── Card
│   │   │   ├── Input
│   │   │   ├── Badge
│   │   │   └── ThemeProvider
│   │   └── layout/        # Componentes de layout
│   │       ├── Header
│   │       ├── Footer
│   │       ├── Sidebar
│   │       └── Layout
│   ├── pages/
│   ├── styles/
│   └── utils/
└── docs/                  # Documentação detalhada
```

## 🛠️ Setup do Projeto

1. **Pré-requisitos**
   - Node.js v20+
   - npm

2. **Instalação**
   ```bash
   # Clone o repositório
   git clone https://github.com/xumbo/newsaas.git
   cd newsaas

   # Instale as dependências
   npm install

   # Execute o projeto
   npm run dev
   ```

## 📝 Changelog

### [0.1.0] - 2024-03-11
- ✨ Setup inicial do projeto
- 🎨 Implementação do sistema de temas (claro/escuro)
- 🧱 Criação dos componentes base (Button, Card, Input, Badge)
- 📱 Layout responsivo com Header, Sidebar e Footer