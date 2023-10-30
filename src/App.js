import logo from './images/logo.png'
import searchIcon from './images/search-icon.png'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await axios.get('http://localhost:3001/movies');
    setMovies(response.data);
  }

  useEffect(() => {
    getMovies();
  }
    , [])

  return (
    <>
      <div className='header'>
        <div className="container">
          <img src={logo} alt="" height={30} />
          <div className='search-wrapper'>
            <img src={searchIcon} alt="" height={18} />
            <input type="text" placeholder='Find Movies, Series' />
          </div>

          <div>
            <button className='header-btn register-btn'>Register</button>
            <button className='header-btn'>Sign In</button>
          </div>
        </div>
      </div>
      <div className='gallery-container'>
        {
          movies?.map(x => (
            <div className='gallery-item'>
              <img src={x.Images[0]} alt="" />
              <h1>{x.Title}</h1>
              <p>Year: {x.Year} | Genre: {x.Genre}</p>
              <p>IMDB Rating {x.imdbRating}</p>
            </div>
          ))
        }
      </div>


    </>
  );
}

export default App;
