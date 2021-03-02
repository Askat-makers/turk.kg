import { Container } from '@material-ui/core';
import React from 'react';
import Navbar from '../components/Navbar';

const DetailPage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Container maxWidth="lg">
        <div class="container">
          <div className="header-home-page">
            <h1>Турецкие сериалы</h1>
          </div>
          <div className="films-home-page">
            
          </div>
          <div>
            <h2>Каталог сериалов</h2>
          </div>
          <div className="catalog-home-page">

          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailPage;