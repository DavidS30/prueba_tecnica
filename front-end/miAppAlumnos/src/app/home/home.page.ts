import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon,
  IonFabButton, IonFab,
  IonInput
} from '@ionic/angular/standalone';
import { Alumno, AlumnosService } from '../services/alumnos.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, CommonModule, IonLabel,
    IonButton, IonIcon, IonFabButton, IonFab, RouterModule, IonInput, FormsModule
  ],
})
export class HomePage {
  alumnos: Alumno[] = [];
  public gradeFilter = '';
  constructor(private alumnosService: AlumnosService) {
    addIcons({ addOutline });
  }

  ngOnInit() {
    this.loadAlumnos();
  }

  loadAlumnos() {
    this.alumnosService.getAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }
  filterByGrade() {
    if (this.gradeFilter !== '') {
      this.alumnos = [];
      this.alumnosService.getAlumnoByGrade(this.gradeFilter).subscribe(data => {
        this.alumnos = data;
      });
    } else {
      this.loadAlumnos();
    }
  }
}
