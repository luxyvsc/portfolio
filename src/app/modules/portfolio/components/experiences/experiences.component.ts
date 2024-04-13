import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor front-end Junior',
        p: 'IMOBZI | JUL 2023 - JUL 2024',
      },
      text: '<p>Desde julho de 2023, atuo como desenvolvedor front-end junior onde comecei a fazer grandes implementações que transformou significamente os sites ou aplicativos do cliente. Nessas ocasiões, desenvolvi funcionalidades complexas, otimizei a experiência do usuário e até mesmo reformulei partes inteiras das aplicações para atender às necessidades dos clientes. Neste momento eu já estava fazendo implementações construindo APIs em python e interfaces em angular</p>',
    },
    {
      summary: {
        strong: 'front-end treinee',
        p: 'IMOBZI | JUL 2022 - JUL 2023',
      },
      text: '<p>Durante este período eu flutuei entre pequenas alterações e algumas tarefas/implementações um pouco mais complexas</p>',
    },
    {
      summary: {
        strong: 'Estagiário front-end',
        p: 'IMOBZI | NOV 2021 - JUL 2022',
      },
      text: '<p>Durante esse período de aprendizado como desenvolvedor front-end, eu aprendi a mexer com angular executando pequenas alterações nos sites dos clientes como ajustes de layout e melhorias de funcionalidade</p>',
    }
  ])
}
