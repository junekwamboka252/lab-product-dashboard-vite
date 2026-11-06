import React from 'react';
import Button from '@mui/material/Button';
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

          <Button
            variant="outlined"
            color="error"
            onClick={() => onRemove(product.id)}
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;