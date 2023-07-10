import React from 'react';
import { Link } from 'react-router-dom';

export default function KaydedilenlerListesi({ list }) {
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {list.map(movie => (
        <span key={movie.id} className="saved-movie">
          {movie.title}
        </span>
      ))}
      <Link to="/">
        <div className="home-button">Ana Sayfa</div>
      </Link>
    </div>
  );
}
