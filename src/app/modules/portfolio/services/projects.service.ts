import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProjects } from '../interface/IProjects.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  #http = inject(HttpClient);
  
  // URL da API - altere para a URL da sua API em produção
  // Exemplo: 'https://portfolio-api-xxxx.onrender.com/api/projects'
  private apiUrl = 'http://localhost:3000/api/projects';

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
