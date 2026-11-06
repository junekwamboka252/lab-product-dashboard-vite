import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <Card
      className={`${styles.productCard} ${
        !product.inStock ? 'outOfStockClass' : ''
      }`}
    >
      <CardContent
  className={!product.inStock ? 'outOfStockClass' : ''}
>
        <Typography variant="h6" component="h2">
          {product.name}
        </Typography>

        <Typography>
          Price: {product.price}
        </Typography>

        <Typography color={product.inStock ? 'success.main' : 'error.main'}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;