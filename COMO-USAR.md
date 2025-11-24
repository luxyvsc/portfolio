# Como Adicionar e Gerenciar Projetos

Este guia mostra como adicionar e gerenciar projetos no seu portfólio de forma fácil.

## Opção 1: Editar o arquivo projects.json (MAIS FÁCIL)

A maneira mais simples é editar diretamente o arquivo `api/projects.json`:

1. Abra o arquivo `api/projects.json`
2. Adicione um novo projeto no array seguindo o formato:

```json
{
  "src": "assets/nome-da-imagem.png",
  "alt": "Descrição da imagem",
  "title": "Nome do Projeto",
  "width": "160",
  "height": "160",
  "description": "Descrição completa do projeto aqui...",
  "links": [
    { "name": "Site", "href": "https://url-do-site.com" },
    { "name": "GitHub", "href": "https://github.com/usuario/repo" }
  ]
}
```

3. Salve o arquivo
4. Reinicie a API (se estiver rodando)
5. Atualize a página do portfólio

## Opção 2: Usar a API REST

### Adicionar um novo projeto

```bash
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "src": "assets/meu-projeto.png",
    "alt": "Meu projeto",
    "title": "Meu Projeto Novo",
    "width": "160",
    "height": "160",
    "description": "Descrição do meu projeto incrível",
    "links": [
      { "name": "Site", "href": "https://meu-site.com" },
      { "name": "GitHub", "href": "https://github.com/user/repo" }
    ]
  }'
```

### Atualizar um projeto existente

Para atualizar o primeiro projeto (índice 0):

```bash
curl -X PUT http://localhost:3000/api/projects/0 \
  -H "Content-Type: application/json" \
  -d '{
    "src": "assets/pokedex-updated.png",
    "alt": "Projeto pokedex atualizado",
    "title": "Projeto Pokedex V2",
    "width": "160",
    "height": "160",
    "description": "Nova descrição...",
    "links": [
      { "name": "Site", "href": "https://..." }
    ]
  }'
```

### Deletar um projeto

Para deletar o segundo projeto (índice 1):

```bash
curl -X DELETE http://localhost:3000/api/projects/1
```

### Listar todos os projetos

```bash
curl http://localhost:3000/api/projects
```

## Importante

- As imagens devem estar na pasta `src/assets/` do projeto Angular
- Após fazer alterações, a página do portfólio será atualizada automaticamente
- Os índices começam em 0 (primeiro projeto = 0, segundo = 1, etc.)
- O arquivo `projects.json` é o fonte de dados - sempre faça backup antes de mudanças grandes

## Exemplo Completo de Projeto

```json
{
  "src": "assets/ecommerce.png",
  "alt": "Projeto E-commerce",
  "title": "E-commerce Full Stack",
  "width": "160",
  "height": "160",
  "description": "Plataforma de e-commerce completa desenvolvida com Angular no frontend e Node.js no backend. Inclui sistema de pagamentos, carrinho de compras, gestão de produtos e painel administrativo.",
  "links": [
    { "name": "Demo", "href": "https://demo.ecommerce.com" },
    { "name": "GitHub Frontend", "href": "https://github.com/user/ecommerce-frontend" },
    { "name": "GitHub Backend", "href": "https://github.com/user/ecommerce-backend" }
  ]
}
```
