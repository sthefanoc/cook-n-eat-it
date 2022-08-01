# Generated by Django 4.0.6 on 2022-08-01 00:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0003_recipe_slug_alter_recipe_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recipe',
            name='slug',
        ),
        migrations.AddField(
            model_name='recipe',
            name='ingredients',
            field=models.CharField(blank=True, max_length=1000, null=True),
        ),
    ]
