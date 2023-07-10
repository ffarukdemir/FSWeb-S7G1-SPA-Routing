import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import FilmListesi from './Filmler/FilmListesi';
import Film from './Filmler/Film';
import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const fetchFilms = () => {
      axios
        .get('http://localhost:5001/api/filmler')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    fetchFilms();
  }, []);

  const addToSavedList = id => {
    if (!saved.includes(id)) {
      setSaved([...saved, id]);
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/kaydedilenler">Kaydedilen Filmler</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <FilmListesi movies={movieList} />
          </Route>
          <Route path="/filmler/:id">
            <Film addToSavedList={addToSavedList} />
          </Route>
          <Route path="/kaydedilenler">
            <KaydedilenlerListesi list={saved} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
