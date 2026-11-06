import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ]);

  const [filter, setFilter] = useState('All');

  const filteredProducts = products.filter((product) => {
    if (filter === 'In Stock') return product.inStock;
    if (filter === 'Out of Stock') return !product.inStock;
    return true;
  });

  const removeProduct = (id) => {
    setProducts((previousProducts) =>
      previousProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography
        variant="h3"
        component="h1"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        Product Dashboard
      </Typography>

      <Typography textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
        Manage and track your products
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mb: 4,
          flexWrap: 'wrap',
        }}
      >
        {['All', 'In Stock', 'Out of Stock'].map((option) => (
          <Button
            key={option}
            variant={filter === option ? 'contained' : 'outlined'}
            onClick={() => setFilter(option)}
          >
            {option}
          </Button>
        ))}
      </Box>

      <ProductList
        products={filteredProducts}
        onRemove={removeProduct}
      />
    </Container>
  );
};

export default App;