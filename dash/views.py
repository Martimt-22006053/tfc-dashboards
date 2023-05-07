from django.shortcuts import render

# Create your views here.

def home_page_view(request):
    return render(request, 'dash/home.html')

def contextualizacao_page_view(request):
    return render(request, 'dash/contextualizacao.html')

def dashboard_page_view(request):
    return render(request, 'dash/dashboard.html')

def dashboard2_page_view(request):
    return render(request, 'dash/dashboard2.html')

def dashboard3_page_view(request):
    return render(request, 'dash/dashboard3.html')