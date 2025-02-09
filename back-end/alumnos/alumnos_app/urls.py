from django.urls import path
from . import views

urlpatterns = [
    path('crear-alumno/', views.crear_alumno, name='crear-alumno'),
    path('consultar-alumno/<str:idGrado>/', views.consultar_por_grado, name='consultar-alumno'),
    path('consultar-todos/', views.consultar_todos, name='consultar-todos'),
]