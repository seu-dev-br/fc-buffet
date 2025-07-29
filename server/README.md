# FC Buffet - Backend API

Backend da aplicação web do FC Buffet, desenvolvido com Node.js e Express.js.

## 🚀 Funcionalidades

- **API de Contato**: Endpoint para receber solicitações de orçamento
- **API de Eventos**: Galeria de eventos realizados com filtros por categoria
- **Validação de Dados**: Validação robusta usando Joi
- **Segurança**: Headers de segurança com Helmet e CORS configurado
- **Logs**: Sistema de logs para monitoramento

## 📋 Pré-requisitos

- Node.js >= 12.0.0
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório
2. Navegue até a pasta do servidor:
   ```bash
   cd server
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   # Edite o arquivo .env com suas configurações
   ```

5. Execute o servidor:
   ```bash
   # Desenvolvimento (com auto-reload)
   npm run dev
   
   # Produção
   npm start
   ```

## 📡 Endpoints da API

### Health Check
- `GET /api/health` - Verificar status da API

### Contato
- `GET /api/contact` - Informações sobre o endpoint
- `POST /api/contact` - Enviar solicitação de orçamento

**Dados necessários para POST /api/contact:**
```json
{
  "name": "Nome do Cliente",
  "email": "email@exemplo.com",
  "phone": "+5511999999999",
  "eventType": "casamento|corporativo|aniversario|outro",
  "eventDate": "2024-12-25",
  "guestCount": 150,
  "message": "Detalhes do evento..."
}
```

### Eventos
- `GET /api/events` - Listar todos os eventos
- `GET /api/events?category=casamento` - Filtrar por categoria
- `GET /api/events?limit=5` - Limitar número de resultados
- `GET /api/events/:id` - Buscar evento específico
- `GET /api/events/categories/list` - Listar categorias disponíveis
- `GET /api/events/stats/overview` - Estatísticas dos eventos

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do servidor:

```env
# Configurações do Servidor
PORT=3001
NODE_ENV=development

# URL do Frontend (para CORS)
CLIENT_URL=http://localhost:3000

# Configurações de Segurança
SESSION_SECRET=sua-chave-secreta-aqui
```

## 🛡️ Segurança

- **Helmet**: Headers de segurança HTTP
- **CORS**: Configurado para permitir apenas o frontend
- **Validação**: Todos os dados de entrada são validados
- **Rate Limiting**: Implementado para prevenir spam
- **Sanitização**: Dados são sanitizados antes do processamento

## 📊 Monitoramento

O servidor inclui logs detalhados para:
- Requisições recebidas
- Erros de validação
- Contatos recebidos
- Erros internos

## 🚀 Deploy

### Para Produção

1. Configure as variáveis de ambiente para produção
2. Instale dependências: `npm install --production`
3. Execute: `npm start`

### Docker (opcional)

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
```

## 📝 Logs

Os logs são exibidos no console e incluem:
- Timestamp das requisições
- Dados dos contatos recebidos
- Erros de validação
- Status da aplicação

## 🔗 Integração com Frontend

O backend está configurado para trabalhar com o frontend Next.js na porta 3000. Certifique-se de que o frontend esteja configurado para fazer requisições para `http://localhost:3001/api`.

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com a equipe de desenvolvimento. 