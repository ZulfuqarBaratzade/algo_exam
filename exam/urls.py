from django.urls import path,include
from .views import exam,register,user_login
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('',exam,name="exam"),
    path('accounts/login/', auth_views.LoginView.as_view(), name='login'),
    path('login/', user_login, name='login'),

]


