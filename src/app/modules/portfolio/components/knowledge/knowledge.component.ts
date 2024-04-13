import { Component, signal } from '@angular/core';

//interface
import { Knowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<Knowledge[]>([
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento angular'
    },
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento HTML5'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento SASS'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento Javascript'
    },
    {
      src: 'assets/icons/knowledge/node.svg',
      alt: 'Ícone de conhecimento nodeJS'
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Ícone de conhecimento Python'
    },
  ])
}
