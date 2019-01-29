from django.shortcuts import render
from .models import *
# Create your views here.
def all_posts(request):
	posts = post.objects.all()
	return render(request,'all_post.html',{'posts':posts})
