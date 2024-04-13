export interface IProjects {
  src: string,
  alt: string,
  title: string,
  width: string,
  height: string,
  description: string,
  links: Array<ILinks>
}

export interface ILinks {
  name: string,
  href: string
}
