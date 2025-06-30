# ====== Сборка фронта ======
FROM node:20-alpine AS frontend

WORKDIR /app/frontend
COPY kraftveb-frontend/ ./
RUN npm install && npm run build


# ====== Бэкенд + сборка ======
FROM python:3.11-slim AS backend

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Системные зависимости
RUN apt update && apt install -y build-essential libpq-dev curl

COPY requirements.txt .
RUN pip install -r requirements.txt

# Копируем весь проект
COPY . .

# Копируем собранный фронт внутрь Django static
COPY --from=frontend /app/frontend/dist ./static/

CMD ["gunicorn", "KraftVeb.wsgi:application", "--bind", "0.0.0.0:8000"]