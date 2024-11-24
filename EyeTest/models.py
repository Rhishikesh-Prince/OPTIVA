from django.db import models

# Create your models here.
class EyeTest(models.Model):
    letter = models.CharField(max_length=1)
    size = models.IntegerField(default=50)

    def __str__(self):
        return self.letter
    
# class color_blindness(models.Model):
#     testing_image= models.ImageField(upload_to='images')
