from pydoc import describe
from rest_framework import mixins
from rest_framework import generics
from api.models import Category, Product
from api.serializers import CategorySerializer, ProductSerializer

class ProductListAPIView(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    def get(self, request):
        return self.list(request)
    def post(self, request):
        return self.create(request)

class ProductDetailAPIView(mixins.RetrieveModelMixin, mixins.UpdateModelMixin,generics.DestroyAPIView, generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    def get(self, request):
        return self.retrieve(request)
    def put(self, request):
        return self.update(request)
    def delete(self, request):
        return self.destroy(request)