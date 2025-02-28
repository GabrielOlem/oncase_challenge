from django.urls import path
from .views import get_data, add_data

urlpatterns = [
    path('data/', get_data, name='get_data'),
    path('data/add/', add_data, name='add_data'),
]
