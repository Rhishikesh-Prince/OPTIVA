from django.urls import path
from . import views
app_name = 'EyeTest'
urlpatterns = [
    path('',views.EyeTest, name='Eye-Test'),
    path('test/',views.test_eye, name='test_eye'),
    # path('submit/', views.submit_answer, name='submit_answer'),
    # path('color_blindness/',views.color_blindness, name='color_blindness'),
]
