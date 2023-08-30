# Generated by Django 4.2.4 on 2023-08-30 14:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=140)),
                ('description', models.CharField(blank=True, max_length=360)),
                ('done', models.BooleanField(default=False)),
            ],
        ),
    ]