import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

//interface
import { IProjectSource, localizeProject } from '../../interface/IProjects.interface';

//services
import { I18nService } from '../../../../core/services/i18n.service';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent {
  public readonly i18n = inject(I18nService);
  #data: IProjectSource;

  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) data: IProjectSource
  ) {
    this.#data = data;
  }

  /** Re-localized on every read, so the open dialog follows the language switch. */
  get getData() {
    return localizeProject(this.#data, this.i18n.lang());
  }

  public closeModal() {
    return this._dialogRef.close();
  }
}
