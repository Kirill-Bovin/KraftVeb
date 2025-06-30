from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Contact
import requests
from dotenv import load_dotenv
import os
load_dotenv()

TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN", "fake-or-dev-token") # замени на свой токен
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID")      # замени на свой chat_id

@receiver(post_save, sender=Contact)
def send_telegram_notification(sender, instance, created, **kwargs):
    if not created:
        return

    message = (
        f"📩 <b>Новая заявка с сайта!</b>\n\n"
        f"👤 <b>Имя:</b> {instance.name}\n"
        f"📧 <b>Email:</b> {instance.email}\n"
        f"📝 <b>Сообщение:</b>\n{instance.message}"
    )

    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    data = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message,
        "parse_mode": "HTML"
    }

    try:
        requests.post(url, data=data, timeout=5)
    except requests.RequestException:
        pass  # можно логировать ошибку