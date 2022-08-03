from turtle import title
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import get_object_or_404 #get_object_or_404(Recipe, pk=pk)

from .models import Recipe
from .serializers import *

# CLASS BASED VIEWS:
class RecipeListCreateAPIView(generics.ListCreateAPIView): # GET / POST
    queryset = Recipe.objects.all().order_by('-created_at')
    serializer_class = RecipeSerializer

    def perform_create(self, serializer):
        # serializer.save(user=self.request.user) # The way it would be done in the real world
        title = serializer.validated_data.get('title')
        content = serializer.validated_data.get('content') or None
        if content is None:
            content = title
        serializer.save(content=content)

recipe_list_create_view = RecipeListCreateAPIView.as_view()

class RecipeDetailAPIView(generics.RetrieveAPIView): # GET
    queryset = Recipe.objects.all() # can be customized
    serializer_class = RecipeSerializer
    lookup_field = 'id'

recipe_detail_view = RecipeDetailAPIView.as_view()

class RecipeUpdateAPIView(generics.UpdateAPIView): # PUT / PATCH
    queryset = Recipe.objects.all() # can be customized
    serializer_class = RecipeSerializer
    lookup_field = 'id'
    def perform_update(self, serializer):
        instance = serializer.save()
        if not instance.content:
            instance.content = instance.title
            instance.save()

recipe_update_view = RecipeUpdateAPIView.as_view()

class RecipeDestroyAPIView(generics.DestroyAPIView): # DELETE
    queryset = Recipe.objects.all() # can be customized
    serializer_class = RecipeSerializer
    lookup_field = 'id'
    def perform_destroy(self, instance):
        # Perform needed logic before deleting the object
        super().perform_destroy(instance)

recipe_delete_view = RecipeDestroyAPIView.as_view()

# Like functionality
@api_view(['PUT', 'DELETE'])
def recipe_detail_function_view(request, id):
    try:
        recipe = Recipe.objects.get(id=id)
    except Recipe.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = RecipeSerializer(recipe, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        recipe.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class RecipeUpdateAPIView(generics.UpdateAPIView): # PUT / PATCH
    queryset = Recipe.objects.all() # can be customized
    serializer_class = RecipeSerializer
    lookup_field = 'id'
    def perform_update(self, serializer):
        instance = serializer.save()
        instance.likes -= 1
        instance.save()

recipe_dislike_view = RecipeUpdateAPIView.as_view()
# FUNCTION BASED VIEWS. Good approach, but not as clear as class based views.
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

# Another alternative to use an all-in-one view: 
# mixins.ListModelMixin, 
# mixins.CreateModelMixin, 
# mixins.RetrieveModelMixin, 
# mixins.UpdateModelMixin, 
# mixins.DestroyModelMixin