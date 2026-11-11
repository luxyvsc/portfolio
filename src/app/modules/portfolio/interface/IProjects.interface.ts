import { Lang, Localized } from '../../../core/i18n/translations';

export interface IProjects {
  src: string,
  alt: string,
  title: string,
  subtitle?: string,
  width: string,
  height: string,
  summary: string,
  description: string,
  tags: Array<string>,
  links: Array<ILinks>
}

export interface ILinks {
  name: string,
  href: string
}

/** Project as stored: text fields carry one value per language. */
export interface IProjectSource {
  src: string,
  title: string,
  width: string,
  height: string,
  tags: Array<string>,
  text: Localized<{ alt: string, subtitle?: string, summary: string, description: string }>,
  links: Array<{ name: Localized<string>, href: string }>
}

export function localizeProject(project: IProjectSource, lang: Lang): IProjects {
  return {
    src: project.src,
    title: project.title,
    width: project.width,
    height: project.height,
    tags: project.tags,
    ...project.text[lang],
    links: project.links.map((link) => ({ name: link.name[lang], href: link.href })),
  };
}
