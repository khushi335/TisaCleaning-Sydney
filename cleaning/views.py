from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,"cleaning/index.html")
    
def about(request):
    return render(request,"cleaning/about.html")
    
def service(request):
    return render(request,"cleaning/service.html")
    
def strata_cleaning(request):
    return render(request, 'cleaning/strata-cleaning.html')
    
def gutter_cleaning(request):
    return render(request, 'cleaning/gutter-cleaning.html')
    
def end_of_lease_cleaning(request):
    return render(request, 'cleaning/end-of-lease-cleaning.html')
    
def high_pressure_cleaning(request):
    return render(request, 'cleaning/high_pressure_cleaning.html')
    
def window_cleaning(request):
    return render(request, 'cleaning/window_cleaning.html')
    
def gallery(request):
    return render(request,"cleaning/gallery.html")
    
def contact(request):
    return render(request,"cleaning/contact.html")