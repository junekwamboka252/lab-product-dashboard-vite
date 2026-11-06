
import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div
      className={
        product.inStock
          ? styles.productCard
          : `${styles.productCard} outOfStockClass`
      }
    >
      <h2>{product.name}</h2>

      <p>Price: {product.price}</p>

      <p>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default ProductCard;
