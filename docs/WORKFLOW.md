# Fluxo de Trabalho - Desenvolvimento Solo

## Branches
- `main`: Código em produção
- `feature/*`: Desenvolvimento de funcionalidades

## Processo de Desenvolvimento

### 1. Criar nova feature
```bash
# Criar branch da feature
git checkout -b feature/nome-da-feature main
```

### 2. Desenvolvimento
- Desenvolver a funcionalidade
- Commitar frequentemente
- Usar prefixos nos commits:
  - 📦 feat: Nova funcionalidade
  - �� fix: Correção de bug
  - 📝 docs: Documentação
  - 💄 style: Formatação, CSS
  - ♻️ refactor: Refatoração
  - ✅ test: Testes
  - 🚀 deploy: Deploy/Infra

### 3. Finalizar feature
```bash
# Atualizar com main
git fetch origin
git rebase origin/main

# Push da feature
git push origin feature/nome-da-feature
```

### 4. Pull Request
- Criar PR para main
- Verificar CI passou
- Fazer self-review do código
- Merge via "Squash and merge"

### 5. Pós-merge
```bash
# Atualizar main local
git checkout main
git pull origin main

# Limpar branches
git branch -d feature/nome-da-feature
git push origin --delete feature/nome-da-feature
```
