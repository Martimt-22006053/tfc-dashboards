from django.shortcuts import render

# Create your views here.

def home_page_view(request):
    return render(request, 'IMOB/home.html')

def imob_page_view(request):
    return render(request, 'IMOB/imobpage.html')

def aml_page_view(request):
    return render(request, 'IMOB/aml.html')

def dashboard_page_view(request):
    return render(request, 'IMOB/dashboard.html')
