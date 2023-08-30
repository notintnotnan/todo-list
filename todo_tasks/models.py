from django.db import models
from django.utils.timezone import now

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=140)
    description = models.CharField(max_length=360,blank=True)
    date_created = models.DateTimeField(default=now,blank=True)
    done = models.BooleanField(default=False)
    date_done = models.DateTimeField(null=True,blank=True)

    def __str__(self):
        return self.title