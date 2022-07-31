from django.db import models

class Recipe(models.Model):
    id=models.AutoField(primary_key=True)
    title=models.CharField(max_length=255, default="New recipe")
    content=models.TextField(blank=True, null=True, default="")
    created_at=models.DateTimeField(auto_now_add=True)
    preparation_time=models.IntegerField(blank=True, null=True)
    cooking_time=models.IntegerField(blank=True, null=True)
    total_time=models.IntegerField(blank=True, null=True)
    serves=models.IntegerField(blank=True, null=True, default=1)

    