from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Contact

@api_view(['POST'])
def create_contact(request):
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    if not (name and email and message):
        return Response({'error': 'Все поля обязательны'}, status=status.HTTP_400_BAD_REQUEST)

    Contact.objects.create(name=name, email=email, message=message)
    return Response({'message': 'Контакт успешно создан'}, status=status.HTTP_201_CREATED)


from django.core.management import call_command
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(["GET"])
def run_migrations(request):
    call_command("migrate", interactive=False)
    return Response({"status": "migrations applied"})