from rest_framework import generics

from rest_framework import mixins
from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer
class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetailAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
