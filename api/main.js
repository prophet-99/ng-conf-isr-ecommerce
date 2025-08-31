const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const { delayResponseUtil } = require('./utils/delayer.util');
const { PRODUCTS } = require('./constants/products');
const { PRODUCTS_DETAIL } = require('./constants/products-detail');

app.use(cors());

//* STATIC RESOURCES
app.use('/resources', express.static(path.join(__dirname, './resources')));

//* PRODUCTS
app.get('/api/products', (req, res) => {
  return delayResponseUtil(() => {
    res.json({
      products: PRODUCTS,
      total: PRODUCTS.length,
    });
  });
});

//* PRODUCT DETAIL
app.get('/api/products/:slug', (req, res) => {
  const { slug } = req.params;
  const product = PRODUCTS_DETAIL.find((p) => p.id === slug);

  if (product) {
    return delayResponseUtil(() => {
      res.json(product);
    });
  }
  return delayResponseUtil(() => {
    res.status(404).json({ message: 'Product not found' });
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 API con delay corriendo en http://localhost:${PORT}`);
});
