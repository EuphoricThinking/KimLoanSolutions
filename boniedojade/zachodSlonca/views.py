from django.shortcuts import render
from django.http import HttpResponse

def main_site(request):
    return render(request, "zachodSlonca/main_site.html", {})

def dodaj_trase(request):
    return HttpResponse("SIALALALALAAAAAAAAAAAA")
# Create your views here.
