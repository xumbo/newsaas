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
│   ├── pages/            # Páginas da aplicação
│   ├── styles/           # Estilos globais
│   ├── services/         # Serviços e integrações
│   └── utils/            # Utilitários
└── docs/                 # Documentação detalhada
```

## 🏷️ Labels do Projeto

### Tipo de Issue
- 🐛 `bug`: Problemas ou falhas no sistema
- ✨ `feature`: Novas funcionalidades
- 📝 `documentation`: Melhorias na documentação
- 🎨 `enhancement`: Melhorias em features existentes
- 🏗️ `infrastructure`: Mudanças de infraestrutura
- 🔒 `security`: Questões de segurança

### Prioridades
- 🔥 `priority-high`: Necessita atenção imediata
- 📌 `priority-medium`: Prioridade normal
- 🔽 `priority-low`: Pode esperar

### Status
- 👀 `review-needed`: Precisa de revisão
- 🚧 `in-progress`: Em desenvolvimento
- ✅ `ready`: Pronto para merge

## 🎯 Milestones

### Milestone 1: Fundação (Atual)
- Setup inicial do projeto
- Implementação de componentes base
- Sistema de temas (claro/escuro)
- Documentação inicial

### Milestone 2: Autenticação
- Integração com Auth0
- Sistema de login/registro
- Proteção de rotas
- Perfis de usuário

### Milestone 3: Core Features
- Dashboard principal
- Gerenciamento de usuários
- Configurações do sistema
- Sistema de pagamentos

### Milestone 4: Melhorias
- Otimização de performance
- Implementação de testes
- Melhorias de SEO
- Implementação de analytics

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

3. **Ambiente de Desenvolvimento**
   - O projeto estará disponível em `http://localhost:3000`

## 📝 Changelog

Consulte o arquivo [CHANGELOG.md](CHANGELOG.md) para ver todas as alterações do projeto.

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.