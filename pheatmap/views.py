from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.




class baseView(TemplateView):
    template_name='pheatmap/pheatmap.html'