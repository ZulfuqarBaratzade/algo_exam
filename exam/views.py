from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login


# Create your views here.


@login_required
def exam(request):
    return render(request,"home.html",{})


# def authView(request):
#     if request.method == "POST":
#         form = UserCreationForm(request.POST or None)
#         if form.is_valid():
#             form.save()
#             return redirect("login")
#         else:
#             form = UserCreationForm()
#     return render(request,"login.html",{"form":form})
from .forms import UserRegistrationForm

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('exam')  # Replace 'home' with the name of your homepage URL
    else:
        form = UserRegistrationForm()
    return render(request, 'registration/login.html', {'form': form})

def user_login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')  # Redirect to the homepage after login
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})