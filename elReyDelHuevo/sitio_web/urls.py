"""
URL configuration for elReyDelHuevo project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path('home', views.home, name='home'),
    path('contacto', views.contacto, name='contacto'),
    path('crear_usuario', views.crear_usuario, name='crear_usuario'),
    path('login', views.login, name='login'),
    path('productos', views.productos, name='productos'),
    path('quienes_somos', views.quienes_somos, name='quienes_somos'),
]
