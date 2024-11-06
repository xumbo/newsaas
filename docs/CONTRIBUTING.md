# Guia de Contribuição

## Fluxo de Branches

- `main`: Código em produção
- `develop`: Branch principal de desenvolvimento
- `feature/*`: Novas funcionalidades
- `fix/*`: Correções de bugs
- `release/*`: Preparação para release
- `hotfix/*`: Correções urgentes em produção

## Processo de Desenvolvimento

1. **Criar nova feature**:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/nome-da-feature
   ```

2. **Desenvolvimento**:
   - Faça suas alterações
   - Mantenha os commits organizados
   - Siga os padrões do projeto

3. **Enviar alterações**:
   ```bash
   git push origin feature/nome-da-feature
   ```

4. **Pull Request**:
   - Abra PR para `develop`
   - Aguarde review
   - Resolva comentários se necessário

5. **Merge**:
   - Squash and merge para `develop`
   - Delete branch após merge 