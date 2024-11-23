# Generated by Django 5.1 on 2024-11-23 09:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0002_alter_order_id_alter_orderitem_id'),
        ('payments', '0002_alter_payment_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='payment',
            name='order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='payment', to='order.order'),
        ),
    ]
