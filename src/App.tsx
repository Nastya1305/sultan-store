
import { Routes, Route } from 'react-router-dom';
import CatalogPage from 'screens/Catalog/CatalogPage';
import ProductPage from 'screens/Product/ProductPage';
import Layout from 'layout/Layout';
import CartPage from 'screens/Cart/CartPage';
import { useEffect } from 'react';
import { useActions } from 'hooks/useActions';

const App = () => {

  const { getProducts } = useActions();
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Routes>
        <Route path='/sultan-store' element={<Layout />}>
          <Route index element={<CatalogPage />} />
          <Route path='product/:barcode' element={<ProductPage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
      <div id='modal-container'></div>
    </>

  );
};

export default App;
