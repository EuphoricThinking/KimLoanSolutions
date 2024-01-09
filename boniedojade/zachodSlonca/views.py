from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse


def main_site(request):
    return render(request, "zachodSlonca/main_site.html", {})

def dodaj_trase(request):
    return render(request, "zachodSlonca/add_route.html", {})

def dane_trasy(request):
    return HttpResponseRedirect(reverse("zachodSlonca:main_site"))
# Create your views here.

def wyswietl_mape(request):
    return HttpResponse("SIALALALALAAAAAAAAAAAA")