import { Component, inject } from '@angular/core';

//interface
import { Knowledge } from '../../interface/IKnowledge.interface';

//services
import { I18nService } from '../../../../core/services/i18n.service';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public readonly i18n = inject(I18nService);

  readonly arrayKnowledge: Knowledge[] = [
    { src: 'assets/icons/knowledge/angular.svg', name: 'Angular' },
    { src: 'assets/icons/knowledge/html5.svg', name: 'HTML5' },
    { src: 'assets/icons/knowledge/sass.svg', name: 'Sass' },
    { src: 'assets/icons/knowledge/javascript.svg', name: 'JavaScript' },
    { src: 'assets/icons/knowledge/node.svg', name: 'Node.js' },
    { src: 'assets/icons/knowledge/python.svg', name: 'Python' },
  ];
}
