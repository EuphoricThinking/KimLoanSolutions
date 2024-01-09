from . import views
from django.urls import path

app_name = 'zachodSlonca'
urlpatterns = [
    path("", views.main_site, name="main_site"),
    path("dodaj_trase/", views.dodaj_trase, name="dodaj_trase")
]