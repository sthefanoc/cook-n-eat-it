# Generated by Django 4.0.6 on 2022-07-31 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_recipe_content_recipe_cooking_time_recipe_created_at_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='slug',
            field=models.SlugField(default='new-recipe', max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]