from django.db import models

class Recipe(models.Model):

    name = models.CharField(max_length=128)
    food_pic = models.ImageField(
        upload_to='food_pic/', default="food_pic/default_profle_izlylf", blank=True
    )
    ingredients = models.TextField(max_length=4096)

    def __str__(self):
        return self.name
