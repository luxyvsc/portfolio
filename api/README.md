# Portfolio Projects API

API simples para gerenciar os projetos do portfólio.

## 🚀 Como usar localmente

### Instalação

```bash
cd api
npm install
```

### Executar

```bash
npm start
```

A API estará disponível em `http://localhost:3000`

## 📡 Endpoints

### GET /api/projects
Retorna todos os projetos

```bash
curl http://localhost:3000/api/projects
```

### POST /api/projects
Adiciona um novo projeto

```bash
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "src": "assets/meu-projeto.png",
    "alt": "Meu projeto",
    "title": "Meu Projeto Incrível",
    "width": "160",
    "height": "160",
    "description": "Descrição do projeto",
    "links": [
      { "name": "Site", "href": "https://meu-site.com" },
      { "name": "GitHub", "href": "https://github.com/user/repo" }
    ]
  }'
```

### PUT /api/projects/:index
Atualiza um projeto existente (index começa em 0)

```bash
curl -X PUT http://localhost:3000/api/projects/0 \
  -H "Content-Type: application/json" \
  -d '{ /* dados atualizados */ }'
```

### DELETE /api/projects/:index
Deleta um projeto (index começa em 0)

```bash
curl -X DELETE http://localhost:3000/api/projects/0
```

## 📝 Gerenciar Projetos

Para adicionar ou editar projetos, você tem duas opções:

### Opção 1: Editar diretamente o arquivo `projects.json`

Basta editar o arquivo `api/projects.json` e adicionar/modificar projetos no formato:

```json
[
  {
    "src": "assets/imagem.png",
    "alt": "Texto alternativo",
    "title": "Título do Projeto",
    "width": "160",
    "height": "160",
    "description": "Descrição detalhada do projeto",
    "links": [
      { "name": "Site", "href": "https://..." },
      { "name": "GitHub", "href": "https://github.com/..." }
    ]
  }
]
```

Depois, reinicie a API.

### Opção 2: Usar a API REST

Use os endpoints POST, PUT ou DELETE para gerenciar projetos programaticamente.

## 🌐 Deploy para Produção

Aqui estão as opções mais fáceis e gratuitas para fazer deploy da API:

### 1. Render (Recomendado - MUITO FÁCIL)

**Render** é gratuito e super simples:

1. Acesse [render.com](https://render.com)
2. Crie uma conta (pode usar GitHub)
3. Clique em "New +" e selecione "Web Service"
4. Conecte seu repositório do GitHub
5. Configure:
   - **Root Directory**: `api`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Clique em "Create Web Service"

Pronto! Em alguns minutos sua API estará no ar com uma URL tipo: `https://portfolio-api-xxxx.onrender.com`

**Nota**: No plano gratuito, o serviço "dorme" após 15 minutos de inatividade e leva ~1 minuto para acordar.

### 2. Railway

Igualmente fácil:

1. Acesse [railway.app](https://railway.app)
2. Faça login com GitHub
3. Clique em "New Project" → "Deploy from GitHub repo"
4. Selecione seu repositório
5. Configure:
   - **Root Directory**: `/api`
   - **Start Command**: `npm start`
6. Deploy automático!

URL: `https://portfolio-api-production.up.railway.app`

### 3. Vercel (Serverless)

Para Vercel, você precisa adicionar um arquivo `vercel.json` na pasta `api`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

Depois:
1. Instale Vercel CLI: `npm install -g vercel`
2. Na pasta `api`, execute: `vercel`
3. Siga as instruções

### 4. Fly.io

1. Instale Fly CLI: [flyctl](https://fly.io/docs/hands-on/install-flyctl/)
2. Na pasta `api`, execute: `fly launch`
3. Siga o wizard de configuração
4. Execute: `fly deploy`

## 🔧 Configurar a URL da API no Angular

Depois de fazer o deploy, atualize o arquivo do serviço Angular com a URL da sua API:

```typescript
// src/app/modules/portfolio/services/projects.service.ts
private apiUrl = 'https://sua-api-aqui.onrender.com/api/projects';
```

## ⚙️ Variáveis de Ambiente

A API usa a porta 3000 por padrão, mas respeita a variável `PORT` definida pelo serviço de hosting:

```bash
PORT=8080 npm start
```

## 📊 Monitoramento

Para verificar se a API está funcionando:

```bash
curl https://sua-api.onrender.com/health
```

Deve retornar: `{"status":"ok"}`

## 🔒 Segurança (Opcional)

### Para um portfolio pessoal simples:
A API atual é suficiente para uso pessoal onde você é o único editor. Ela já possui:
- ✅ Validação de entrada
- ✅ Tratamento de erros
- ✅ CORS configurado

### Para uso em produção com múltiplos usuários:
Considere adicionar:

1. **Rate Limiting** - Prevenir abuso da API:
```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // limite de 100 requisições por IP
});

app.use('/api/', limiter);
```

2. **Autenticação** - Proteger operações de escrita:
```bash
npm install jsonwebtoken
```

3. **Validação mais robusta**:
```bash
npm install joi
```

4. **HTTPS** - Já incluído nos serviços recomendados (Render, Railway, etc.)

**Nota**: Para um portfólio pessoal onde só você adiciona projetos, a implementação atual é adequada. As melhorias de segurança são recomendadas apenas se você planeja permitir que outros usuários interajam com a API.

## 💡 Dicas

1. **Render** é o mais fácil para começar
2. Sempre teste localmente antes do deploy
3. Use `git push` - os serviços detectam automaticamente e fazem redeploy
4. Mantenha `projects.json` no repositório para backup
