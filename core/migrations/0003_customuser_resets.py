# Generated by Django 3.1 on 2020-09-14 08:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20200901_0039'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='resets',
            field=models.IntegerField(default=0),
        ),
    ]
