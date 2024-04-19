from django.urls import path,include
from .views import exam
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('',exam,name="exam")
    ]



