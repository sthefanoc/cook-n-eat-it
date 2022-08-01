from django.urls import path
from . import views

urlpatterns = [
    path('', views.recipe_list_create_view, name='recipe-create'),
    path('<int:id>', views.RecipeDetailAPIView.as_view(), name='recipe-detail'),
]
