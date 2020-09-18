import React, { useState } from 'react';
import classNames from './App.module.scss';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import PhotoContextProvider from './Context/Context';

function App(props) {

  const [searchTerm, setSearchTerm] = useState(null);

  function handleSubmit(e, value) {
    setSearchTerm(value);
    e.preventDefault();
  }

  return (
    <div className={classNames.App}>
      <PhotoContextProvider>
        <Header handleSubmit={handleSubmit} />
        <Container searchTerm={searchTerm} />
      </PhotoContextProvider>
    </div>
  );
}

export default App;