from . import views
from django.urls import path

app_name = 'zachodSlonca'
urlpatterns = [
    path("", views.main_site, name="main_site"),
    path("dodaj_trase/", views.dodaj_trase, name="dodaj_trase"),
    path("wyswietl_mape/", views.wyswietl_mape, name="wyswietl_mape"),
    path("dane_trasy/", views.dane_trasy, name="dane_trasy"),
    path("edytuj_trase/", views.edytuj_trase, name="edytuj_trase")
]