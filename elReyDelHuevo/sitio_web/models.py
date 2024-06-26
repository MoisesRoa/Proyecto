from django.db import models

# Create your models here.
class Producto(models.Model):
    nombreProducto = models.CharField(max_length=50)
    precioProducto = models.IntegerField()
    tipohuevo= models.CharField(max_length=50)
    peso = models.IntegerField()
    imagen =  models.ImageField()
    def __str__(self):
        return self.nombreProducto
    