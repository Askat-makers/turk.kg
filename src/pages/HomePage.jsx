import { Container } from '@material-ui/core';
import React, { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar'
import MediaCard from '../components/MediaCard'
import { filmContext } from '../contexts/FilmContext';
import { Link } from 'react-router-dom';


const HomePage = () => {

  const { getSerials, serials } = useContext(filmContext)

  useEffect(() => {
    getSerials()
  }, [])

  return (
    <div className="home-page">
      <Navbar />
      <Container maxWidth="lg">
        <div class="container">
          <div className="header-home-page">
            <h1>Турецкие сериалы</h1>
          </div>
          <div className="films-home-page">
            {serials.map(serial => (
              <Link to={`/detail/${serial.id}`}>
                <MediaCard serial={serial} />
              </Link>
            ))}
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

export default HomePage;