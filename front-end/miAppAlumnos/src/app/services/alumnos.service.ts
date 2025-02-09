import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Alumno {
  nombre: string;
  fecha_nacimiento: string;
  nombre_padre: string;
  nombre_madre: string;
  grado: string;
  seccion: string;
  fecha_ingreso: string;
}

@Injectable({
  providedIn: 'root'
})


export class AlumnosService {
  private apiUrl = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(`${this.apiUrl}/consultar-todos/`);
  }

  getAlumnoByGrade(grade: string): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.apiUrl}/consultar-alumno/${grade}/`);
  }

  createAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(`${this.apiUrl}/crear-alumno/`, alumno);
  }
}
