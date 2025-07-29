# 🚀 Configuração do GitHub para FC Buffet

## Status Atual
✅ Repositório criado: https://github.com/seu-dev-br/fc-buffet.git
✅ Git inicializado localmente
✅ Commit inicial realizado
⏳ Push para GitHub pendente

## 🔧 Como Fazer o Push

### Opção 1: Usando Token de Acesso Pessoal (Recomendado)

1. **Crie um Token de Acesso Pessoal no GitHub:**
   - Vá para GitHub.com → Settings → Developer settings → Personal access tokens
   - Clique em "Generate new token (classic)"
   - Selecione os escopos: `repo`, `workflow`
   - Copie o token gerado

2. **Configure o Git com suas credenciais:**
   ```bash
   git config --global user.name "Seu Nome"
   git config --global user.email "seu-email@exemplo.com"
   ```

3. **Faça o push:**
   ```bash
   git push origin main
   ```
   - Quando solicitado, use seu username do GitHub
   - Para senha, use o token de acesso pessoal

### Opção 2: Usando SSH (Se configurado)

1. **Configure SSH key (se ainda não tiver):**
   ```bash
   ssh-keygen -t ed25519 -C "seu-email@exemplo.com"
   ```

2. **Adicione a chave ao GitHub:**
   - Copie a chave pública: `cat ~/.ssh/id_ed25519.pub`
   - Vá para GitHub.com → Settings → SSH and GPG keys
   - Clique em "New SSH key" e cole a chave

3. **Mude para SSH e faça push:**
   ```bash
   git remote set-url origin git@github.com:seu-dev-br/fc-buffet.git
   git push origin main
   ```

### Opção 3: Usando GitHub CLI

1. **Instale GitHub CLI:**
   ```bash
   # Ubuntu/Debian
   sudo apt install gh
   
   # Ou baixe de: https://cli.github.com/
   ```

2. **Faça login:**
   ```bash
   gh auth login
   ```

3. **Faça push:**
   ```bash
   git push origin main
   ```

## 📁 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
fc-buffet/
├── client/                 # Frontend Next.js
│   ├── components/         # Componentes React
│   ├── pages/             # Páginas do site
│   ├── styles/            # Estilos CSS
│   └── package.json
├── server/                # Backend Node.js/Express
│   ├── src/
│   │   ├── routes/        # Rotas da API
│   │   ├── controllers/   # Controladores
│   │   └── app.js         # Aplicação principal
│   └── package.json
├── README.md              # Documentação principal
├── .gitignore            # Arquivos ignorados pelo Git
└── GITHUB_SETUP.md       # Este arquivo
```

## 🎯 Próximos Passos

Após fazer o push com sucesso:

1. **Configure o repositório no GitHub:**
   - Adicione uma descrição
   - Configure tópicos (tags)
   - Ative GitHub Pages (opcional)

2. **Configure CI/CD (opcional):**
   - GitHub Actions para deploy automático
   - Vercel para frontend
   - Railway/Heroku para backend

3. **Adicione colaboradores (se necessário):**
   - Settings → Collaborators and teams

## 🔗 Links Úteis

- **Repositório:** https://github.com/seu-dev-br/fc-buffet
- **GitHub Docs:** https://docs.github.com/
- **GitHub CLI:** https://cli.github.com/

## 🆘 Solução de Problemas

### Erro de Autenticação
```bash
# Verifique suas credenciais
git config --list | grep user

# Reconfigure se necessário
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

### Erro de Permissão
- Verifique se você tem acesso ao repositório
- Confirme se o token tem as permissões corretas
- Verifique se a SSH key está configurada corretamente

### Erro de Rede
```bash
# Teste a conexão
ping github.com

# Verifique o proxy (se aplicável)
git config --global http.proxy http://proxy.example.com:8080
```

---

**🎉 Sucesso!** Após fazer o push, seu projeto estará disponível em:
**https://github.com/seu-dev-br/fc-buffet** 