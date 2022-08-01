from rest_framework import serializers

from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'
        read_only_fields = ('id',)
        extra_kwargs = {
            'title': {'required': True},
            'content': {'required': True},
            'preparation_time': {'required': True},
            'cooking_time': {'required': True},
            'total_time': {'required': True},
            'serves': {'required': True},
            'ingredients': {'required': True},
            'ingredients_list': {'required': True},
        }