from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse


def main_site(request):
    return render(request, "zachodSlonca/main_site.html", {"name" : "Dom-MIM"})

def dodaj_trase(request):
    return render(request, "zachodSlonca/add_route.html", {"action" : "Dodaj"})

def dane_trasy(request):
    newName = request.POST.get("uname")
    return render(request, "zachodSlonca/main_site.html", {"name" : newName})

def edytuj_trase(request):
    return render(request, "zachodSlonca/add_route.html", {"action" : "Zapisz"})
# Create your views here.

def wyswietl_mape(request):
    return HttpResponse("SIALALALALAAAAAAAAAAAA")