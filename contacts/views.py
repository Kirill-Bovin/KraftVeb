import os
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Contact


TELEGRAM_BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN')
TELEGRAM_CHAT_ID = os.environ.get('TELEGRAM_CHAT_ID')

@api_view(['POST'])
def create_contact(request):
    name = request.data.get('name')
    email = request.data.get('email')
    message = request.data.get('message')

    if not (name and email and message):
        return Response({'error': 'Все поля обязательны'}, status=status.HTTP_400_BAD_REQUEST)

    # Сохраняем в базу
    Contact.objects.create(name=name, email=email, message=message)

    # Отправляем в Telegram
    text = f"📥 Новая заявка с сайта:\n\n👤 Имя: {name}\n📧 Email: {email}\n📝 Сообщение: {message}"

    try:
        requests.post(
            f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage",
            data={
                "chat_id": TELEGRAM_CHAT_ID,
                "text": text
            },
            timeout=5
        )
    except Exception as e:
        # Можно логировать, если хочешь
        print(f"Ошибка отправки в Telegram: {e}")

    return Response({'message': 'Контакт успешно создан'}, status=status.HTTP_201_CREATED)