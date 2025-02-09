import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton, IonIcon,
  IonFabButton, IonFab
} from '@ionic/angular/standalone';
import { Alumno, AlumnosService } from '../services/alumnos.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, CommonModule, IonLabel,
    IonButton, IonIcon, IonFabButton, IonFab, RouterModule
  ],
})
export class HomePage {
  alumnos: Alumno[] = [];
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
}
