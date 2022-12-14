from django.urls import path
from . import views

urlpatterns = [
    #path('', views.recipe_alt_view, name='recipe-create'), #function based view
    #path('<int:id>', views.recipe_alt_view, name='recipe-detail'), #function based view
    path('', views.recipe_list_create_view, name='recipe-create'), #class based view
    path('<int:id>', views.recipe_detail_view, name='recipe-detail'), #class based view
    path('<int:id>/update/', views.recipe_update_view, name='recipe-update'), #class based view
    path('<int:id>/delete/', views.recipe_delete_view, name='recipe-delete'), #class based view
    path('<int:id>/like/', views.recipe_detail_function_view, name='recipe-like'), #class based view
    path('<int:id>/dislike/', views.recipe_detail_function_view, name='recipe-dislike'), #class based view
]
