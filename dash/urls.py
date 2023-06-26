from django.urls import path
from . import views

app_name = 'imob'

urlpatterns = [
    path('', views.home_page_view, name='home'),
    path('contextualizacao', views.contextualizacao_page_view, name='contextualizacao'),
    path('dashboard', views.dashboard_page_view, name='dashboard'),
    path('dashboard2', views.dashboard2_page_view, name='dashboard2'),
    path('dashboard3', views.dashboard3_page_view, name='dashboard3'),
    path('dashboard4', views.dashboard4_page_view, name='dashboard4')
]


