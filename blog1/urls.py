from django.contrib import admin
from django.urls import path, include

from.import views

urlpatterns=[
path('all/',views.all_posts,name='all'),
path('base/',views.base,name='base'),

]


