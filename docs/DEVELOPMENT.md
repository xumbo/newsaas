# Processo de Desenvolvimento

## 🔧 Ambientes

### Local (Desenvolvimento)
- URL: http://localhost:3000
- Uso: Desenvolvimento e testes locais
- Variáveis: .env.local

### Produção
- URL: [será definida]
- Uso: Ambiente real
- Variáveis: Definidas no deploy

## 📝 Processo de Validação

1. **Desenvolvimento Local**
   - Desenvolver feature
   - Testes locais
   - Code review

2. **Testes**
   - Rodar testes automatizados
   - Verificar lint/type checking
   - Validar build local

3. **Code Review**
   - Pull Request
   - CI checks
   - Review do código

4. **Deploy Produção**
   - Merge na main
   - Build e deploy
   - Verificação pós-deploy

## ✅ Checklist de Release
- [ ] Testes passando
- [ ] Build sem erros
- [ ] Code review aprovado
- [ ] Documentação atualizada
- [ ] Changelog atualizado 