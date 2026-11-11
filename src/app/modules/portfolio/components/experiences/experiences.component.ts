import { Component, inject } from '@angular/core';

//interface
import { IExperiences } from '../../interface/IExperiences.interface';

//services
import { I18nService } from '../../../../core/services/i18n.service';
import { Localized } from '../../../../core/i18n/translations';

const EXPERIENCES: Localized<IExperiences[]> = {
  pt: [
    {
      summary: { strong: 'Desenvolvedor front-end Pleno', p: 'KROOZE | MAR 2025 - Presente' },
      text: '<p>Atualmente, atuo como Desenvolvedor Frontend Pleno na Krooze, a maior plataforma brasileira de vendas de cruzeiros, que conecta companhias marítimas a operadoras e agências de viagem. Minha principal responsabilidade é o desenvolvimento de temas, interfaces e layouts personalizados para os clientes da plataforma, garantindo uma experiência de usuário fluida, responsiva e alinhada às necessidades específicas de cada parceiro.</p>',
    },
    {
      summary: { strong: 'Desenvolvedor front-end Junior', p: 'IMOBZI | JUL 2023 - FEV 2025' },
      text: '<p>Desde julho de 2023, atuo como desenvolvedor front-end junior onde comecei a fazer grandes implementações que transformou significamente os sites ou aplicativos do cliente. Nessas ocasiões, desenvolvi funcionalidades complexas, otimizei a experiência do usuário e até mesmo reformulei partes inteiras das aplicações para atender às necessidades dos clientes. Neste momento eu já estava fazendo implementações construindo APIs em python e interfaces em angular</p>',
    },
    {
      summary: { strong: 'front-end trainee', p: 'IMOBZI | JUL 2022 - JUL 2023' },
      text: '<p>Durante este período eu flutuei entre pequenas alterações e algumas tarefas/implementações um pouco mais complexas</p>',
    },
    {
      summary: { strong: 'Estagiário front-end', p: 'IMOBZI | NOV 2021 - JUL 2022' },
      text: '<p>Durante esse período de aprendizado como desenvolvedor front-end, eu aprendi a mexer com angular executando pequenas alterações nos sites dos clientes como ajustes de layout e melhorias de funcionalidade</p>',
    },
  ],
  en: [
    {
      summary: { strong: 'Mid-level front-end developer', p: 'KROOZE | MAR 2025 - Present' },
      text: "<p>I currently work as a Mid-level Front-end Developer at Krooze, Brazil's largest cruise sales platform, connecting cruise lines with tour operators and travel agencies. My main responsibility is building custom themes, interfaces and layouts for the platform's clients, ensuring a smooth, responsive user experience tailored to each partner's specific needs.</p>",
    },
    {
      summary: { strong: 'Junior front-end developer', p: 'IMOBZI | JUL 2023 - FEB 2025' },
      text: "<p>From July 2023 I worked as a junior front-end developer, delivering major implementations that significantly transformed clients' websites and apps. I built complex features, improved the user experience and even redesigned entire parts of applications to meet client needs. By then I was also building APIs in Python and interfaces in Angular.</p>",
    },
    {
      summary: { strong: 'Front-end trainee', p: 'IMOBZI | JUL 2022 - JUL 2023' },
      text: '<p>During this period I moved between small changes and some more complex tasks and implementations.</p>',
    },
    {
      summary: { strong: 'Front-end intern', p: 'IMOBZI | NOV 2021 - JUL 2022' },
      text: "<p>During this learning period as a front-end developer, I learned Angular by making small changes to clients' websites, such as layout adjustments and feature improvements.</p>",
    },
  ],
};

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public readonly i18n = inject(I18nService);

  get arrayExperiences() {
    return EXPERIENCES[this.i18n.lang()];
  }
}
