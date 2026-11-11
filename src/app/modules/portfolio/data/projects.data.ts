import { IProjectSource } from '../interface/IProjects.interface';

const GENUI_URL = 'https://genera-genui--genera-genui.us-central1.hosted.app';

export const PROJECTS: IProjectSource[] = [
  {
    src: 'assets/genui.jpg',
    title: 'Genera GenUI',
    width: '1265',
    height: '2283',
    tags: ['Next.js', 'React', 'Gemini', 'RAG', 'Firestore', 'Leaflet', 'Firebase'],
    text: {
      pt: {
        alt: 'Tela de resultados do Genera GenUI com resumo personalizado e cards de predisposição genética',
        subtitle: 'Challenge DASA × FIAP · IA Generativa',
        summary: 'Resultados genômicos reapresentados como uma página que se monta sozinha com IA generativa — visual, acessível e revisada.',
        description: `<p>O Genera GenUI transforma laudos genômicos em uma interface gerada por IA (Generative UI): o Gemini escolhe e preenche os componentes da página de acordo com o perfil de cada pessoa, com três modos de leitura (Simples, Normal e Expert), retrospectiva e versão mobile responsiva.</p>
<p>O projeto conta com RAG sobre um corpus de referência, validação das respostas com contratos Zod e linter de conteúdo, auditoria e justificativa por bloco, logging estruturado e uma política de governança alinhada à LGPD.</p>
<p><strong>Minha atuação:</strong> layout de todo o site, mapa de ancestralidade com Leaflet, chatbot <em>Perguntar à IA</em> com RAG, leitor de voz com IA (voz neural pt-BR do Piper gerada no navegador) e a publicação no Firebase App Hosting com deploy via GitHub Actions.</p>`,
      },
      en: {
        alt: 'Genera GenUI results screen with a personalized summary and genetic predisposition cards',
        subtitle: 'DASA × FIAP Challenge · Generative AI',
        summary: 'Genomic results re-presented as a page that builds itself with generative AI — visual, accessible and reviewed.',
        description: `<p>Genera GenUI turns genomic reports into an AI-generated interface (Generative UI): Gemini picks and fills the page components according to each person's profile, with three reading modes (Simple, Normal and Expert), a retrospective view and a responsive mobile version.</p>
<p>The project includes RAG over a reference corpus, response validation with Zod contracts and a content linter, per-block auditing and justification, structured logging and a governance policy aligned with Brazil's LGPD data protection law.</p>
<p><strong>My role:</strong> the layout of the whole site, the ancestry map with Leaflet, the <em>Ask the AI</em> chatbot with RAG, the AI voice reader (Piper pt-BR neural voice generated in the browser) and publishing on Firebase App Hosting with deployment through GitHub Actions.</p>`,
      },
    },
    links: [
      { name: { pt: 'Site', en: 'Website' }, href: `${GENUI_URL}/` },
      { name: { pt: 'Demonstração', en: 'Demo' }, href: `${GENUI_URL}/demo` },
      { name: { pt: 'Vídeo', en: 'Video' }, href: 'https://www.youtube.com/watch?v=dq1Rq3mWIXw' },
    ],
  },
  {
    src: 'assets/pokedex.png',
    title: 'Pokedex',
    width: '1890',
    height: '1907',
    tags: ['Angular', 'TypeScript', 'REST API', 'SCSS'],
    text: {
      pt: {
        alt: 'Projeto Pokedex',
        subtitle: 'Aplicação web · Angular',
        summary: 'Pokédex em Angular para pesquisar, listar e ver detalhes de pokémons consumindo a PokeAPI.',
        description: 'Esta aplicação é uma Pokédex desenvolvida em Angular que permite pesquisar, listar e visualizar detalhes de pokémons utilizando a PokeAPI. Com uma interface intuitiva, o usuário pode buscar pokémons pelo nome, navegar por uma lista paginada e acessar informações detalhadas de cada pokémon. O projeto demonstra integração com APIs REST, uso de componentes reutilizáveis e boas práticas de desenvolvimento frontend com Angular.',
      },
      en: {
        alt: 'Pokedex project',
        subtitle: 'Web app · Angular',
        summary: 'An Angular Pokédex to search, list and view Pokémon details using the PokeAPI.',
        description: 'This application is a Pokédex built with Angular that lets you search, list and view Pokémon details using the PokeAPI. With an intuitive interface, users can search Pokémon by name, browse a paginated list and open detailed information for each one. The project showcases REST API integration, reusable components and front-end best practices with Angular.',
      },
    },
    links: [
      { name: { pt: 'Site', en: 'Website' }, href: 'https://luxyvsc.github.io/pokemonsList/' },
      { name: { pt: 'GitHub', en: 'GitHub' }, href: 'https://github.com/luxyvsc/pokemonsList' },
    ],
  },
];
