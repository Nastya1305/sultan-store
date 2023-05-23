
import { Routes, Route } from 'react-router-dom';
import CatalogPage from 'screens/Catalog/CatalogPage';
import ProductPage from 'screens/Product/ProductPage';
import Layout from 'layout/Layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/sultan-store/' element={<Layout />}>
          <Route index element={<CatalogPage />} />
          <Route path='product/:barcode' element={<ProductPage />} />
        </Route>
      </Routes>
    </>

  );
};

export default App;
