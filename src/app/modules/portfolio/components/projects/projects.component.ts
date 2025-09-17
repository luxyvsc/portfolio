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
  #dialog = inject(MatDialog);
  #arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/pokedex.png',
      alt: 'Projeto pokedex',
      title: 'Projeto Pokedex',
      width: '160',
      height: '160',
      description: 'Esta aplicação é uma Pokédex desenvolvida em Angular que permite pesquisar, listar e visualizar detalhes de pokémons utilizando a PokeAPI. Com uma interface intuitiva, o usuário pode buscar pokémons pelo nome, navegar por uma lista paginada e acessar informações detalhadas de cada pokémon. O projeto demonstra integração com APIs REST, uso de componentes reutilizáveis e boas práticas de desenvolvimento frontend com Angular.',
      links: [
        { name: 'Site', href: 'https://pokemonlist-vsc377.rj.r.appspot.com' },
        { name: 'GitHub', href: 'https://github.com/luxyvsc/pokemonsList' }
      ]
    }
  ]);

  get arrayProjects() {
    return this.#arrayProjects();
  }

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
