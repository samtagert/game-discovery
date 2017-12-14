import React from 'react';
import './GamesPage.css';
import GamesFilter from '../../components/GamesFilter/GamesFilter';

//game page is gonna have its own api request calling the params.match.id thing

const GamesPage = () => {
  return (
    <div>
      <GamesFilter />
    </div>
  );
}

export default GamesPage;