from django.db import models
from cloudinary.models import CloudinaryField
from django.template.defaultfilters import slugify
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
    image=CloudinaryField('Image', blank=True, null=True, overwrite=True, format='jpg')
    ingredients_list=models.CharField(max_length=1000, blank=True, null=True, default='[]')
    
    def save(self, *args, **kwargs):
        # Slug
        new_slug = slugify(self.title)
        if Recipe.objects.filter(slug=new_slug).exists():
            new_slug = new_slug + '-' + str(self.id)
        self.slug = new_slug
        
        # Ingredients list
        if len(self.ingredients) > 0:
            self.ingredients_list=self.ingredients.split(',')
        self.ingredients_list=[]

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