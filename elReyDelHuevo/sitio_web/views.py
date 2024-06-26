from django.shortcuts import render
from .models import Producto

def home(request):
    context={}
    return render(request, 'home.html', context={})

def crear_usuario(request):
    context={}
    return render(request, 'crear_usuario.html', context={})

def login(request):
    context={}
    return render(request, 'login.html', context={})

def contacto(request):
    context={}
    return render(request, 'contacto.html', context={})

def productos(request):
    producto= Producto.objects.all()
    data ={
        'producto':producto
    }
    return render(request,'productos.html',data )

def quienes_somos(request):
    context={}
    return render(request, 'quienes_somos.html', context={})