from django.urls import path
from .views import fwa1

urlpatterns = [
    path('', fwa1, name='fwa1'),

]
