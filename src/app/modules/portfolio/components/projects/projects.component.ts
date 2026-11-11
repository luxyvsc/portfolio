import { Component, inject } from '@angular/core';

//material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

//interface
import { IProjectSource, localizeProject } from '../../interface/IProjects.interface';

//data
import { PROJECTS } from '../../data/projects.data';

//enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//services
import { I18nService } from '../../../../core/services/i18n.service';

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
  #dialog = inject(MatDialog);
  public readonly i18n = inject(I18nService);
  public readonly projects = PROJECTS;

  public view(source: IProjectSource) {
    return localizeProject(source, this.i18n.lang());
  }

  public openDialog(data: IProjectSource) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
