from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.url_backends if hasattr(admin.site, 'url_backends') else admin.site.urls),
    path('api/', include('api.urls')),
]
