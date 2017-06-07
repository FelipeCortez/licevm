from django.conf.urls import include, url
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'lista_topicos$', views.lista_topicos, name='lista_topicos'),
    url(r'topico/(?P<id>[0-9]+)$', views.topico, name='topico'),
]
