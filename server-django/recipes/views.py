from turtle import title
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import get_object_or_404
from yaml import serialize # Or Http404

from .models import Recipe
from .serializers import RecipeSerializer

# Class based views:
class RecipeListCreateAPIView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def perform_create(self, serializer):
        # serializer.save(user=self.request.user) # The way it would be done in the real world
        title = serializer.validated_data.get('title')
        content = serializer.validated_data.get('content') or None
        if content is None:
            content = title
        serializer.save(content=content)

recipe_list_create_view = RecipeListCreateAPIView.as_view()

class RecipeDetailAPIView(generics.RetrieveAPIView):
    queryset = Recipe.objects.all() # can be customized
    serializer_class = RecipeSerializer
    lookup_field = 'id'

recipe_detail_view = RecipeDetailAPIView.as_view()

# Function based views. Good approach, but not as clear as class based views.
@api_view(['GET', 'POST'])
def recipe_alt_view(request, id=None, *args, **kwargs):
    method=request.method

    if method == 'GET': # See item
        if id is not None:
            obj = get_object_or_404(Recipe, id=id)
            data = RecipeSerializer(obj, many=False).data
            return Response(data)
        
        queryset = Recipe.objects.all()
        data = RecipeSerializer(queryset, many=True).data
        return Response(data)

    if method == 'POST': # Create item
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            title = serializer.validated_data.get('title')
            content = serializer.validated_data.get('content') or None
            if content is None:
                content = title
                serializer.save(content=content)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    if method == 'PUT': # Change item
        pass

    if method == 'DELETE': # Delete item
        pass