import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProjects } from '../interface/IProjects.interface';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  #http = inject(HttpClient);
  
  // URL da API configurada no arquivo de ambiente
  private apiUrl = environment.apiUrl;

  getProjects(): Observable<IProjects[]> {
    return this.#http.get<IProjects[]>(this.apiUrl);
  }

  addProject(project: IProjects): Observable<IProjects> {
    return this.#http.post<IProjects>(this.apiUrl, project);
  }

  updateProject(index: number, project: IProjects): Observable<IProjects> {
    return this.#http.put<IProjects>(`${this.apiUrl}/${index}`, project);
  }

  deleteProject(index: number): Observable<IProjects> {
    return this.#http.delete<IProjects>(`${this.apiUrl}/${index}`);
  }
}
