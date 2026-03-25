from django.urls import path
from . import views

urlpatterns = [
    path('api/products/', views.product_list),
    path('api/products/<int:id>/', views.product_detail),
    path('api/categories/', views.category_list),
    path('api/categories/<int:id>/', views.category_detail),
    path('api/categories/<int:id>/products/', views.products_by_category),
]