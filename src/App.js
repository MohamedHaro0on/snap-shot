import React, { useState } from 'react';
import classNames from './App.module.scss';
import Container from './Components/Container/Container';
import Header from './Components/Header/Header';
import PhotoContextProvider from './Context/Context';

const App = () => {

  const [searchTerm, setSearchTerm] = useState(null);

  const handleSubmit = (e, value) => {
    e.preventDefault();
    setSearchTerm(value);
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