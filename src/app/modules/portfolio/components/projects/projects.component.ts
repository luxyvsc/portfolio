import { Component, inject, signal } from '@angular/core';

//material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

//interface
import { IProjects } from '../../interface/IProjects.interface';

//enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//dialog
import { DialogProjectsComponent } from '../../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/jujutsu-kaisen.jpg',
      alt: 'Projeto site jujutsu kaisen',
      title: 'Site jujutsu kaisen',
      width: '100px',
      height: '51px',
      description: 'Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente a JUJUTSU KAISEN, front-end com angular e back com nodeJS',
      links: [
        {
          name: 'Conheçam meu site sobre jujutsu',
          href: ''
        }
      ]
    },
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    })
  }
}
