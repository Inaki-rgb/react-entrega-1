import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
      id: 1,
      name: "Product 1",
      description: "Description for Product 1",
      price: "$9.99",
      image: "https://via.placeholder.com/150",
  },
  {
      id: 2,
      name: "Product 2",
      description: "Description for Product 2",
      price: "$19.99",
      image: "https://via.placeholder.com/150",
  },
  {
      id: 3,
      name: "Product 3",
      description: "Description for Product 3",
      price: "$29.99",
      image: "https://via.placeholder.com/150",
  },
];



function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;