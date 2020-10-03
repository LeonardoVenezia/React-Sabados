import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MiHeader from './components/MiHeader/MiHeader';
import CommonProduct from './components/CommonProduct/CommonProduct';

function App() {
  return (
    <div className="App">
      <MiHeader titleClass="tituloAzul" title="Esta es la home!" />
      <CommonProduct
        title="Producto de Ejemplo"
        counter={true}
        description="lorem inpum lorem inpum lorem inpum lorem inpum  lorem inpum "
        img={{
          src: 'logo.svg',
          alt: 'Logo de react',
        }}
      />
    </div>
  );
}

export default App;
