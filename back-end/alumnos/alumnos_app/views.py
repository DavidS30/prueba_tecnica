from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Alumno
from .serializers import AlumnoSerializer

@api_view(['POST'])
def crear_alumno(request):
    if request.method == 'POST':
        serializer = AlumnoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def consultar_por_grado(request, idGrado):
    try:
        alumnos = Alumno.objects.filter(grado=idGrado)
        serializer = AlumnoSerializer(alumnos, many=True)
        return Response(serializer.data)
    except Alumno.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def consultar_todos(request):
    try:
        alumnos = Alumno.objects.all()
        serializer = AlumnoSerializer(alumnos, many=True)
        return Response(serializer.data)
    except Alumno.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
