import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonList, IonAlert, IonInput } from '@ionic/angular/standalone';
import { Alumno, AlumnosService } from 'src/app/services/alumnos.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.page.html',
  styleUrls: ['./crear-alumno.page.scss'],
  imports: [FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonLabel, IonItem, IonList, IonAlert, IonInput, RouterModule]
})
export class CrearAlumnoPage {

  alumno: Alumno = {
    nombre: '',
    nombre_padre: '',
    nombre_madre: '',
    fecha_ingreso: '',
    fecha_nacimiento: '',
    grado: '',
    seccion: '',
  };
  alumno_nombre = '';
  isAlertOpen = false;
  alertButtons = ['Cerrar'];
  errorMessages = "xdxdxd"

  constructor(private alumnosService: AlumnosService, private router: Router) { }


  guardarAlumno() {
    console.log("nombre alumnoooo " + this.alumno_nombre);
    this.alumnosService.createAlumno(this.alumno).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.isAlertOpen = true
        console.error('Error recibido en el componente:', error);
        let errorMessagesTotal = 'Tienes los siguientes errores al crear el alumno: \n\n';
        const errores = error.error;
        for (let [clave, valor] of Object.entries(errores)) {
          errorMessagesTotal += `${clave}: ${valor} \n\n`;
        }
        this.errorMessages = errorMessagesTotal;
        this.isAlertOpen = false
      }
    });
  }

  do_something($event: any) {
    this.alumno_nombre = $event.target.value;
  }

}
