# Generated by Django 4.0.6 on 2022-08-01 00:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0004_remove_recipe_slug_recipe_ingredients'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='total_time',
        ),
    ]
