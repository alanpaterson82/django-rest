# Generated by Django 4.2.11 on 2024-04-30 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_alter_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, default='images/default_profile_izly1f', upload_to='images/'),
        ),
    ]
