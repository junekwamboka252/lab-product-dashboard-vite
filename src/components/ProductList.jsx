
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemove }) => {
  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />

          <button onClick={() => onRemove(product.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
