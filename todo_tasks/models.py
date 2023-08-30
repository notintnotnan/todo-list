from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=140)
    description = models.CharField(max_length=360,blank=True)
    done = models.BooleanField(default=False)