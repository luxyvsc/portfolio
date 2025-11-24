const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Caminho para o arquivo de projetos
const projectsFilePath = path.join(__dirname, 'projects.json');

// Rota para obter todos os projetos
app.get('/api/projects', (req, res) => {
  try {
    const data = fs.readFileSync(projectsFilePath, 'utf8');
    const projects = JSON.parse(data);
    res.json(projects);
  } catch (error) {
    console.error('Erro ao ler projetos:', error);
    res.status(500).json({ error: 'Erro ao carregar projetos' });
  }
});

// Rota para adicionar um novo projeto
app.post('/api/projects', (req, res) => {
  try {
    const data = fs.readFileSync(projectsFilePath, 'utf8');
    const projects = JSON.parse(data);
    
    const newProject = req.body;
    
    // Validação básica dos campos obrigatórios
    if (!newProject.title || !newProject.src || !newProject.description) {
      return res.status(400).json({ error: 'Campos obrigatórios: title, src, description' });
    }
    
    projects.push(newProject);
    
    fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
    res.status(201).json(newProject);
  } catch (error) {
    console.error('Erro ao adicionar projeto:', error);
    res.status(500).json({ error: 'Erro ao adicionar projeto' });
  }
});

// Rota para atualizar um projeto existente
app.put('/api/projects/:index', (req, res) => {
  try {
    const data = fs.readFileSync(projectsFilePath, 'utf8');
    const projects = JSON.parse(data);
    
    const index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= projects.length) {
      return res.status(404).json({ error: 'Projeto não encontrado' });
    }
    
    projects[index] = req.body;
    fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
    res.json(projects[index]);
  } catch (error) {
    console.error('Erro ao atualizar projeto:', error);
    res.status(500).json({ error: 'Erro ao atualizar projeto' });
  }
});

// Rota para deletar um projeto
app.delete('/api/projects/:index', (req, res) => {
  try {
    const data = fs.readFileSync(projectsFilePath, 'utf8');
    const projects = JSON.parse(data);
    
    const index = parseInt(req.params.index);
    if (isNaN(index) || index < 0 || index >= projects.length) {
      return res.status(404).json({ error: 'Projeto não encontrado' });
    }
    
    const deleted = projects.splice(index, 1);
    fs.writeFileSync(projectsFilePath, JSON.stringify(projects, null, 2));
    res.json(deleted[0]);
  } catch (error) {
    console.error('Erro ao deletar projeto:', error);
    res.status(500).json({ error: 'Erro ao deletar projeto' });
  }
});

// Rota de health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}/api/projects`);
});
