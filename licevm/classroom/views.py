from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse

def index(request):
    return render(request, "index.html")

def preview(request):
    return render(request, "inicial.html")
