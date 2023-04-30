import ProductsPage from './pages/Catalog/CatalogPage';
import Header from 'components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <ProductsPage />
      </div>

    </>

  );
};

export default App;
