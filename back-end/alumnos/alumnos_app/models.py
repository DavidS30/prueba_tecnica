from django.db import models

# Create your models here.
from django.db import models

class Alumno(models.Model):
    nombre = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    nombre_padre = models.CharField(max_length=100)
    nombre_madre = models.CharField(max_length=100)
    grado = models.CharField(max_length=50)
    seccion = models.CharField(max_length=10)
    fecha_ingreso = models.DateField()

    def __str__(self):
        return self.nombre