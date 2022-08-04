from django.db import models
from django.template.defaultfilters import slugify
import json

class Recipe(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255, default="New recipe")
    slug=models.SlugField(max_length=400, default="new-recipe")
    content=models.TextField(blank=True, null=True, default="")
    created_at=models.DateTimeField(auto_now_add=True)
    preparation_time=models.IntegerField(blank=True, null=True)
    cooking_time=models.IntegerField(blank=True, null=True)
    total_time=models.IntegerField(blank=True, null=True, default=0)
    serves=models.IntegerField(blank=True, null=True, default=1)
    ingredients= models.CharField(max_length=1000, blank=True, null=True)
    image=models.ImageField('Image', upload_to='images/', blank=True, null=True, default=None)
    ingredients_list=models.JSONField(max_length=1000, blank=True, null=True, default='{}')
    likes=models.IntegerField(blank=True, null=True, default=0)
    
    def save(self, *args, **kwargs):
        # Slug
        new_slug = slugify(self.title)
        if Recipe.objects.filter(slug=new_slug).exists():
            new_slug = new_slug + '-' + str(self.created_at)[:10]
        self.slug = new_slug
        
        # Ingredients list
        if self.ingredients is not None and len(self.ingredients) > 0:
            self.ingredients_list=json.dumps([item.strip() for item in self.ingredients.split(',')])
        self.ingredients_list='{}'

        # Total time
        if self.preparation_time is not None and self.cooking_time is not None:
            self.total_time=self.preparation_time+self.cooking_time    
        
        super().save(*args, **kwargs)
        
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
