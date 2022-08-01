from rest_framework import serializers

from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'
        read_only_fields = ('id','slug', 'ingredients_list','created_at','total_time')
        extra_kwargs = {
            'title': {'required': True},
            'content': {'required': True},
            'preparation_time': {'required': True},
            'cooking_time': {'required': True},
            'serves': {'required': True},
            'ingredients': {'required': True},
        }