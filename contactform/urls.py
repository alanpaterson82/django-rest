from django.urls import path
from contactform import views

urlpatterns = [
    path('contactform/', views.ContactFormList.as_view()),
    path('contactform/<int:pk>/', views.ContactFormDetail.as_view()),
]