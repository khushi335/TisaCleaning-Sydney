from django.urls import path
from .views import *

urlpatterns = [
    path("",index,name="index"),
    path("about/",about,name="about"),
    path("service/",service,name="service"),
    path('strata-cleaning/', strata_cleaning, name='strata_cleaning'),
    path('gutter-cleaning/', gutter_cleaning, name='gutter_cleaning'),
    path('end-of-lease-cleaning/', end_of_lease_cleaning, name='end_of_lease_cleaning'),
    path('high-pressure-cleaning/', high_pressure_cleaning, name='high_pressure_cleaning'),
    path('window-cleaning/', window_cleaning, name='window_cleaning'),
    path("gallery/",gallery,name="gallery"),
    path("contact/",contact,name="contact"),
]