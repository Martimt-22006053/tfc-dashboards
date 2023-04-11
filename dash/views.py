from django.shortcuts import render

# Create your views here.

def home_page_view(request):
    return render(request, 'dash/home.html')

def imob_page_view(request):
    return render(request, 'dash/imobpage.html')

def aml_page_view(request):
    return render(request, 'dash/aml.html')

def dashboard_page_view(request):
    return render(request, 'dash/dashboard.html')

def dashboard2_page_view(request):
    return render(request, 'dash/dashboard2.html')
