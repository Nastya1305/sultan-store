import Footer from 'components/Footer/Footer';
import ProductsPage from './pages/Catalog/CatalogPage';
import Header from 'components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <ProductsPage />
      </div>
      <Footer />
    </>

  );
};

export default App;
