from rest_framework import serializers

from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'
        read_only_fields = ('id','slug', 'ingredients_list','created_at','total_time')
        