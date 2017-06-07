from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .models import Topic

def index(request):
    return render(request, "index.html")

def lista_topicos(request):
    context = {}
    context["topicos"] = Topic.objects.filter()
    print(Topic.objects.all())
    return render(request, "lista_conteudos.html", context)

def topico(request, id):
    context = {}
    context["topic"] = Topic.objects.get(id=id)
    context["subtopics"] = Topic.objects.filter(parent=context["topic"])
    return render(request, "conteudo.html", context)
