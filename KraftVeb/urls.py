from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from contacts.views import run_migrations


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('contacts.urls')),   # ваши API
    path('', TemplateView.as_view(template_name='index.html')),
    path("run-migrations/", run_migrations),
]