import React from "react";

interface Products {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ProductList: React.FC<{ products: Products[] }> = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((products) => (
        <div key={products.id} className="products-item">
          <h2>{products.name}</h2>
          <p>{products.description}</p>
          <p>{products.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
