from django.urls import path
from . import views

app_name = 'imob'

urlpatterns = [
    path('', views.home_page_view, name='home'),
    path('imob', views.imob_page_view, name='imobpage'),
    path('aml', views.aml_page_view, name='aml'),
    path('dashboard', views.dashboard_page_view, name='dashboard')
]