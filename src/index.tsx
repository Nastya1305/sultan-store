import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store";
import "./styles/index.scss";
import FiltersContainer from 'components/Filters/Container/FiltersContainer';
import CatalogPage from 'pages/Catalog/CatalogPage';







const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    {/* <CatalogPage /> */}
    <App />
  </Provider>,
);

