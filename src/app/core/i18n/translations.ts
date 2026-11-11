export type Lang = 'pt' | 'en';
export type Localized<T> = Record<Lang, T>;

const pt = {
  'meta.title': 'Pedro Tostes · Portfólio',

  'nav.skills': 'Conhecimentos',
  'nav.experience': 'Experiências',
  'nav.projects': 'Projetos',
  'nav.contact': 'Contato',
  'nav.themeToDark': 'Ativar tema escuro',
  'nav.themeToLight': 'Ativar tema claro',
  'nav.language': 'Idioma',

  'hero.badge': 'Disponível para novos projetos',
  'hero.greeting': 'Olá, eu sou',
  'hero.bio1': 'Sou desenvolvedor front-end pleno com experiência sólida em Angular. Tenho vivência em desenvolvimento de temas, interfaces e soluções personalizadas para grandes clientes, sempre focando em performance, responsividade e experiência do usuário.',
  'hero.bio2': 'Além disso, estou cursando Inteligência Artificial e me aprofundando em machine learning e deep learning, ampliando minha atuação para projetos que envolvem análise de dados, automação e soluções inteligentes com Python.',
  'hero.location': 'São Paulo, São Paulo, Brasil',
  'hero.resume': 'Currículo',
  'hero.seeProjects': 'Ver projetos',
  'hero.photoAlt': 'Pedro Tostes - Foto de perfil',

  'skills.eyebrow': 'Stack',
  'skills.title': 'Conhecimentos',
  'skills.iconAlt': 'Ícone de',

  'experience.eyebrow': 'Carreira',
  'experience.title': 'Últimas Experiências',

  'projects.eyebrow': 'Portfólio',
  'projects.title': 'Projetos Desenvolvidos',
  'projects.details': 'Ver detalhes',
  'projects.detailsOf': 'Ver detalhes de',
  'projects.loading': 'Carregando todos os projetos desenvolvidos...',
  'projects.error': 'Ocorreu um erro no download do componente, tente novamente...',

  'dialog.description': 'Descrição',
  'dialog.close': 'Fechar diálogo',

  'footer.madeWith': 'Feito com Angular',
  'footer.backToTop': 'Voltar ao topo ↑',
};

export type TranslationKey = keyof typeof pt;

const en: Record<TranslationKey, string> = {
  'meta.title': 'Pedro Tostes · Portfolio',

  'nav.skills': 'Skills',
  'nav.experience': 'Experience',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'nav.themeToDark': 'Switch to dark theme',
  'nav.themeToLight': 'Switch to light theme',
  'nav.language': 'Language',

  'hero.badge': 'Open to new projects',
  'hero.greeting': "Hi, I'm",
  'hero.bio1': "I'm a mid-level front-end developer with solid experience in Angular. I build themes, interfaces and custom solutions for large clients, always focusing on performance, responsiveness and user experience.",
  'hero.bio2': "I'm also studying Artificial Intelligence and going deeper into machine learning and deep learning, expanding my work into projects involving data analysis, automation and intelligent solutions with Python.",
  'hero.location': 'São Paulo, Brazil',
  'hero.resume': 'Resume',
  'hero.seeProjects': 'See projects',
  'hero.photoAlt': 'Pedro Tostes - Profile photo',

  'skills.eyebrow': 'Stack',
  'skills.title': 'Skills',
  'skills.iconAlt': 'Icon for',

  'experience.eyebrow': 'Career',
  'experience.title': 'Recent Experience',

  'projects.eyebrow': 'Portfolio',
  'projects.title': 'Projects',
  'projects.details': 'View details',
  'projects.detailsOf': 'View details of',
  'projects.loading': 'Loading projects...',
  'projects.error': 'The component failed to load, please try again...',

  'dialog.description': 'Description',
  'dialog.close': 'Close dialog',

  'footer.madeWith': 'Built with Angular',
  'footer.backToTop': 'Back to top ↑',
};

export const TRANSLATIONS: Localized<Record<TranslationKey, string>> = { pt, en };
