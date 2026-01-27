const categorydata = [
  {
    slug: "beauty",
    name: "Beauty",
    url: "https://dummyjson.com/products/category/beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "fragrances",
    name: "Fragrances",
    url: "https://dummyjson.com/products/category/fragrances",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "furniture",
    name: "Furniture",
    url: "https://dummyjson.com/products/category/furniture",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "groceries",
    name: "Groceries",
    url: "https://dummyjson.com/products/category/groceries",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "home-decoration",
    name: "Home Decoration",
    url: "https://dummyjson.com/products/category/home-decoration",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "kitchen-accessories",
    name: "Kitchen Accessories",
    url: "https://dummyjson.com/products/category/kitchen-accessories",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "laptops",
    name: "Laptops",
    url: "https://dummyjson.com/products/category/laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "mens-shirts",
    name: "Mens Shirts",
    url: "https://dummyjson.com/products/category/mens-shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "mens-shoes",
    name: "Mens Shoes",
    url: "https://dummyjson.com/products/category/mens-shoes",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "mens-watches",
    name: "Mens Watches",
    url: "https://dummyjson.com/products/category/mens-watches",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "mobile-accessories",
    name: "Mobile Accessories",
    url: "https://dummyjson.com/products/category/mobile-accessories",
    image:
      "https://images.unsplash.com/photo-1601593346740-925612772716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "motorcycle",
    name: "Motorcycle",
    url: "https://dummyjson.com/products/category/motorcycle",
    image:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "skin-care",
    name: "Skin Care",
    url: "https://dummyjson.com/products/category/skin-care",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "smartphones",
    name: "Smartphones",
    url: "https://dummyjson.com/products/category/smartphones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "sports-accessories",
    name: "Sports Accessories",
    url: "https://dummyjson.com/products/category/sports-accessories",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "sunglasses",
    name: "Sunglasses",
    url: "https://dummyjson.com/products/category/sunglasses",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "tablets",
    name: "Tablets",
    url: "https://dummyjson.com/products/category/tablets",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "tops",
    name: "Tops",
    url: "https://dummyjson.com/products/category/tops",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "vehicle",
    name: "Vehicle",
    url: "https://dummyjson.com/products/category/vehicle",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "womens-bags",
    name: "Womens Bags",
    url: "https://dummyjson.com/products/category/womens-bags",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "womens-dresses",
    name: "Womens Dresses",
    url: "https://dummyjson.com/products/category/womens-dresses",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "womens-jewellery",
    name: "Womens Jewellery",
    url: "https://dummyjson.com/products/category/womens-jewellery",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "womens-shoes",
    name: "Womens Shoes",
    url: "https://dummyjson.com/products/category/womens-shoes",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "womens-watches",
    name: "Womens Watches",
    url: "https://dummyjson.com/products/category/womens-watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export {categorydata}