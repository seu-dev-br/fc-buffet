# FC Buffet - Website Completo

Um website full-stack moderno para o FC Buffet, uma empresa de catering especializada em eventos de luxo.

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 12** - Framework React com App Router
- **React 17** - Biblioteca de interface
- **Tailwind CSS** - Framework CSS utilitário
- **Google Fonts** - Tipografia (Inter + Playfair Display)

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Joi** - Validação de dados
- **Helmet** - Segurança HTTP
- **CORS** - Cross-Origin Resource Sharing

## 📁 Estrutura do Projeto

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
└── README.md
```

## 🎨 Design e Branding

- **Paleta de Cores**: Laranja/Amarelo (luxo) + Cinza (sofisticação)
- **Tipografia**: Playfair Display (títulos) + Inter (texto)
- **Estilo**: Luxo e sofisticação com toque acolhedor
- **Responsivo**: Design mobile-first

## 📄 Páginas do Site

1. **Home** (`/`) - Página principal com hero, serviços, sobre e depoimentos
2. **Sobre** (`/sobre`) - História da empresa, valores e equipe
3. **Eventos** (`/eventos`) - Galeria de eventos realizados
4. **Contato** (`/contato`) - Formulário de orçamento e informações

## 🔧 API Endpoints

### Backend (Porta 3001)

- `GET /api/health` - Health check
- `GET /api/events` - Listar eventos
- `GET /api/events?category=casamento` - Filtrar por categoria
- `GET /api/events/categories/list` - Listar categorias
- `GET /api/events/stats/overview` - Estatísticas
- `POST /api/contact` - Enviar formulário de contato

## 🚀 Como Executar

### Pré-requisitos
- Node.js 12+ 
- npm

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd fc-buffet
```

### 2. Configure o Backend
```bash
cd server
npm install
```

Crie um arquivo `.env` na pasta `server/`:
```env
PORT=3001
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

### 3. Configure o Frontend
```bash
cd ../client
npm install
```

### 4. Execute os Servidores

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

### 5. Acesse o Site
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001/api

## 🎯 Funcionalidades

### Frontend
- ✅ Design responsivo e moderno
- ✅ Navegação suave entre páginas
- ✅ Formulário de contato funcional
- ✅ Galeria de eventos com filtros
- ✅ SEO otimizado
- ✅ Performance otimizada

### Backend
- ✅ API RESTful completa
- ✅ Validação de dados com Joi
- ✅ Segurança com Helmet
- ✅ CORS configurado
- ✅ Tratamento de erros
- ✅ Logs estruturados

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔒 Segurança

- **Helmet.js** - Headers de segurança HTTP
- **CORS** - Configurado para permitir apenas o frontend
- **Validação** - Todos os inputs são validados com Joi
- **Rate Limiting** - Proteção contra spam (configurável)

## 🎨 Componentes Principais

### Header
- Logo animado
- Navegação responsiva
- Menu mobile
- Transparência no scroll

### Footer
- Informações da empresa
- Links úteis
- Redes sociais
- Contato

### EventGallery
- Grid responsivo de eventos
- Filtros por categoria
- Loading states
- Error handling

### ContactForm
- Validação em tempo real
- Integração com API
- Estados de loading/success/error
- Campos obrigatórios

## 📊 Dados Mockados

O projeto inclui dados de exemplo para:
- 8 eventos diferentes
- 3 categorias (casamento, corporativo, aniversário)
- Estatísticas de eventos
- Depoimentos de clientes

## 🚀 Deploy

### Frontend (Vercel/Netlify)
```bash
cd client
npm run build
```

### Backend (Heroku/Railway)
```bash
cd server
npm start
```

## 📝 Scripts Disponíveis

### Backend
- `npm run dev` - Desenvolvimento com nodemon
- `npm start` - Produção

### Frontend
- `npm run dev` - Desenvolvimento
- `npm run build` - Build de produção
- `npm start` - Servidor de produção
- `npm run lint` - Linting

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

## 👥 Equipe

- **FC Buffet** - Empresa de catering
- **Desenvolvimento** - Full-stack moderno

---

**FC Buffet** - Transformando momentos especiais em experiências inesquecíveis! 🎉 