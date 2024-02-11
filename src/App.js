import {useEffect, useState} from 'react';
import AnimeCard from './AnimeCard';

//import Card from './Card';
import './App.css';
import SearchIcon from './search.png';

const API = "https://api.jikan.moe/v4/anime?q=";


const App = () => {
  
  const [searchAnimeTitle, setSearch] = useState("");
  const [animes, mappedAnime] = useState([]);
    const searchAnime = async (title) => {
        const response = await fetch(`${API}${title}&sfw`);
        const data = await response.json();
        mappedAnime(data.data);
        console.log(data.data);
    }

    useEffect(() => {
        searchAnime('');
    }, []);

    const handleKeyDown = (event) => {
        // Check if the pressed key is Enter (key code 13)
        if (event.key === 'Enter') {
          searchAnime(searchAnimeTitle);
        }
    };

    return (
        <div className = "app">
            <h1>Anime Library</h1>
            <div className="search">
                <input 
                placeholder = "Search for anime"
                value = {searchAnimeTitle} 
                onKeyDown={handleKeyDown}
                onChange={(e) => setSearch(e.target.value)}
                />
                <img src = {SearchIcon} alt = "search" onClick = {() => searchAnime(searchAnimeTitle)}/>
            </div>
            {animes?.length > 0 ? (
              <div className="container">

              {animes.map((anime) => ( 
                 <AnimeCard anime = {anime}/> 
              ))}
              </div>
            ) : (
              <div className="empty">
                <h2>No anime found</h2>
              </div>
            )}
        </div>
    );
};
 
export default App;