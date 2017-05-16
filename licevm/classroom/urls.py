from django.conf.urls import include, url
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'preview$', views.preview, name='preview'),
]
