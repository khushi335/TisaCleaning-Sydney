from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,"cleaning/index.html")
    
def about(request):
    return render(request,"cleaning/about.html")
    
def service(request):
    return render(request,"cleaning/service.html")
    
def gallery(request):
    return render(request,"cleaning/gallery.html")
    
def contact(request):
    return render(request,"cleaning/contact.html")