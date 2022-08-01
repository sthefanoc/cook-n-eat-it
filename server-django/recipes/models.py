from django.db import models
class Recipe(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255, default="New recipe")
    content=models.TextField(blank=True, null=True, default="")
    created_at=models.DateTimeField(auto_now_add=True)
    preparation_time=models.IntegerField(blank=True, null=True)
    cooking_time=models.IntegerField(blank=True, null=True)
    serves=models.IntegerField(blank=True, null=True, default=1)
    ingredients= models.CharField(max_length=1000, blank=True, null=True)
    
    # @property
    # def total_time_method(self):
    #     return self.preparation_time + self.cooking_time

    # total_time=total_time_method()

    # @property
    # def ingredients_list_method(self):
    #     if self.ingredients:
    #         split_ingredients = [item.strip() for item in self.ingredients.split(',')]
    #         return split_ingredients
    #     return []
    
    # ingredients_list = ingredients_list_method()