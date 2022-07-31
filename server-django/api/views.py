import json
from django.forms.models import model_to_dict

from rest_framework.decorators import api_view
from rest_framework.response import Response

from recipes.models import Recipe
from recipes.serializers import RecipeSerializer

@api_view(['GET']) # Set which methods are allowed
def api_home(request, *args, **kwargs):
    """
    DRF API View
    """
    instance = Recipe.objects.all().order_by('?').first()
    data = {}
    if instance:
        data = RecipeSerializer(instance).data
    return Response(data)