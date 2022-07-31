from email import contentmanager
from turtle import title
from django.db import models

class Recipe(models.Model):
    title=models.CharField(max_length=255),
    content=models.TextField(blank=True, null=True),
    created_at=models.DateTimeField(auto_now_add=True),
    preparation_time=models.IntegerField(blank=True, null=True),
    cooking_time=models.IntegerField(blank=True, null=True),
    total_time=models.IntegerField(blank=True, null=True),
    serves=models.IntegerField(blank=True, null=True, default=1),

    