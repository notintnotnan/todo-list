# Generated by Django 4.2.4 on 2023-08-30 15:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo_tasks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='date_created',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
        migrations.AddField(
            model_name='task',
            name='date_done',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
    ]
