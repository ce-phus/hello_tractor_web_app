from rest_framework import serializers
from .models import Order, OrderItem
from apps.posts.models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'id',
            'title',
            'model',
            'description',
            'price',
            'cover_photo',
            'country',
            'city',
            'postal_code',
            'street_address',
            'advert_type',
            'ref_code'
        ]

class OrderItemsSerializer(serializers.ModelSerializer):
    posts = PostSerializer(read_only=True)

    class Meta:
        model =OrderItem
        fields = [
            'id',
            'post',
            'price',
            'quantity'
        ]

class OrderListSerializer(serializers.ModelSerializer):
    items = OrderItemsSerializer(many=True, read_only=True)

    total_quantity = serializers.IntegerField(source='get_total_quantity', read_only=True)

    class Mete:
        model  =Order
        fields = [
            'id',
            'user',
            'first_name',
            'last_name',
            'email',
            'country',
            'city',
            'postal_code',
            'street_address',
            'paid',
            'paid_amount',
            'used_coupon',
            'total_cost', 
            'payment_intent', 
            'shipped_date', 
            'status', 
            'items', 
            'total_quantity'
        ]

        read_only_fields = ['user', 'created_at', 'total_quantity']