from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse


prevName = "Dom-MIM"
def main_site(request):
    return render(request, "zachodSlonca/main_site.html",
                  {"name" : prevName})

def dodaj_trase(request):
    return render(request, "zachodSlonca/add_route.html",
                  {"action" : "Dodaj"})

def dane_trasy(request):
    global prevName
    newName = request.POST.get("uname")
    nameToSend = {}
    if newName is not None and (not newName.isspace() and not newName == ''):
        nameToSend = {"name" : newName}
        prevName = newName
    else:
        nameToSend = {"name" : prevName}

    return render(request, "zachodSlonca/main_site.html",
                  nameToSend)

def edytuj_trase(request):
    return render(request, "zachodSlonca/add_route.html",
                  {"action" : "Zapisz"})
# Create your views here.

def wyswietl_mape(request):
    return render(request, "zachodSlonca/show_map.html",
                  {"welcome": "MOJA JEDYNA TRASA"})