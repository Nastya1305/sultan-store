import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import { store } from "./store";
import "./styles/index.scss";
import Select from 'components/UI/Select/Select';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    {/* <Select valueList={['первое', 'второе', 'третье']} startValue='пое' onChange={(a) => console.log(a)} /> */}
    <App />
  </Provider>,
);

