import React from 'react';
import './styles/App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Inputs from './components/Inputs';
import Filters from './components/Filters';
import Footer from './components/Footer';

function App() {
  return (
    <Provider>
      <div className="starwars">
        <header className="header__img">
          <img className="img" src="https://i.etsystatic.com/14990737/r/il/7187f6/1256070096/il_570xN.1256070096_q02j.jpg" alt="star wars" />
        </header>
        <Inputs />
        <Filters />
        <Table />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
