from rest_framework import generics

from .models import Recipe
from .serializers import RecipeSerializer

class RecipeListCreateAPIView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def perform_create(self, serializer):
        # serializer.save(user=self.request.user)
        serializer.save()

recipe_list_create_view = RecipeListCreateAPIView.as_view()

class RecipeDetailAPIView(generics.RetrieveAPIView):
    queryset = Recipe.objects.all() # can be customized
    serializer_class = RecipeSerializer
    lookup_field = 'id'

recipe_detail_view = RecipeDetailAPIView.as_view()

