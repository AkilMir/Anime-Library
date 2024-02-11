import {useEffect, useState} from 'react';
import AnimeCard from './AnimeCard';

//import Card from './Card';
import './App.css';
import SearchIcon from './search.png';

const API = "https://api.jikan.moe/v4/anime?q=";

const anime1 = {
    "mal_id": 269,
    "url": "https://myanimelist.net/anime/269/Bleach",
    "images": {
        "jpg": {
            "image_url": "https://cdn.myanimelist.net/images/anime/3/40451.jpg",
            "small_image_url": "https://cdn.myanimelist.net/images/anime/3/40451t.jpg",
            "large_image_url": "https://cdn.myanimelist.net/images/anime/3/40451l.jpg"
        },
        "webp": {
            "image_url": "https://cdn.myanimelist.net/images/anime/3/40451.webp",
            "small_image_url": "https://cdn.myanimelist.net/images/anime/3/40451t.webp",
            "large_image_url": "https://cdn.myanimelist.net/images/anime/3/40451l.webp"
        }
    },
    "trailer": {
        "youtube_id": "0yk5H6vvfG4",
        "url": "https://www.youtube.com/watch?v=0yk5H6vvfG4",
        "embed_url": "https://www.youtube.com/embed/0yk5H6vvfG4?enablejsapi=1&wmode=opaque&autoplay=1",
        "images": {
            "image_url": "https://img.youtube.com/vi/0yk5H6vvfG4/default.jpg",
            "small_image_url": "https://img.youtube.com/vi/0yk5H6vvfG4/sddefault.jpg",
            "medium_image_url": "https://img.youtube.com/vi/0yk5H6vvfG4/mqdefault.jpg",
            "large_image_url": "https://img.youtube.com/vi/0yk5H6vvfG4/hqdefault.jpg",
            "maximum_image_url": "https://img.youtube.com/vi/0yk5H6vvfG4/maxresdefault.jpg"
        }
    },
    "approved": true,
    "titles": [
        {
            "type": "Default",
            "title": "Bleach"
        },
        {
            "type": "Japanese",
            "title": "BLEACH - ブリーチ -"
        },
        {
            "type": "English",
            "title": "Bleach"
        }
    ],
    "title": "Bleach",
    "title_english": "Bleach",
    "title_japanese": "BLEACH - ブリーチ -",
    "title_synonyms": [],
    "type": "TV",
    "source": "Manga",
    "episodes": 366,
    "status": "Finished Airing",
    "airing": false,
    "aired": {
        "from": "2004-10-05T00:00:00+00:00",
        "to": "2012-03-27T00:00:00+00:00",
        "prop": {
            "from": {
                "day": 5,
                "month": 10,
                "year": 2004
            },
            "to": {
                "day": 27,
                "month": 3,
                "year": 2012
            }
        },
        "string": "Oct 5, 2004 to Mar 27, 2012"
    },
    "duration": "24 min per ep",
    "rating": "PG-13 - Teens 13 or older",
    "score": 7.93,
    "scored_by": 1116074,
    "rank": 705,
    "popularity": 39,
    "members": 1939424,
    "favorites": 72582,
    "synopsis": "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.\n\nHowever, as Rukia is unable to regain her powers, Ichigo is given the daunting task of hunting down the Hollows that plague their town. However, he is not alone in his fight, as he is later joined by his friends—classmates Orihime Inoue, Yasutora Sado, and Uryuu Ishida—who each have their own unique abilities. As Ichigo and his comrades get used to their new duties and support each other on and off the battlefield, the young Soul Reaper soon learns that the Hollows are not the only real threat to the human world.\n\n[Written by MAL Rewrite]",
    "background": "Bleach adapts the first 54 volumes of Tite Kubo's manga series of the same name. In addition, 4 anime-original arcs were broadcast in-between and during the adaptations of original arcs of the manga.",
    "season": "fall",
    "year": 2004,
    "broadcast": {
        "day": "Tuesdays",
        "time": "18:00",
        "timezone": "Asia/Tokyo",
        "string": "Tuesdays at 18:00 (JST)"
    },
    "producers": [
        {
            "mal_id": 16,
            "type": "anime",
            "name": "TV Tokyo",
            "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
        },
        {
            "mal_id": 17,
            "type": "anime",
            "name": "Aniplex",
            "url": "https://myanimelist.net/anime/producer/17/Aniplex"
        },
        {
            "mal_id": 53,
            "type": "anime",
            "name": "Dentsu",
            "url": "https://myanimelist.net/anime/producer/53/Dentsu"
        },
        {
            "mal_id": 717,
            "type": "anime",
            "name": "TV Tokyo Music",
            "url": "https://myanimelist.net/anime/producer/717/TV_Tokyo_Music"
        },
        {
            "mal_id": 1365,
            "type": "anime",
            "name": "Shueisha",
            "url": "https://myanimelist.net/anime/producer/1365/Shueisha"
        }
    ],
    "licensors": [
        {
            "mal_id": 119,
            "type": "anime",
            "name": "VIZ Media",
            "url": "https://myanimelist.net/anime/producer/119/VIZ_Media"
        }
    ],
    "studios": [
        {
            "mal_id": 1,
            "type": "anime",
            "name": "Pierrot",
            "url": "https://myanimelist.net/anime/producer/1/Pierrot"
        }
    ],
    "genres": [
        {
            "mal_id": 1,
            "type": "anime",
            "name": "Action",
            "url": "https://myanimelist.net/anime/genre/1/Action"
        },
        {
            "mal_id": 2,
            "type": "anime",
            "name": "Adventure",
            "url": "https://myanimelist.net/anime/genre/2/Adventure"
        },
        {
            "mal_id": 10,
            "type": "anime",
            "name": "Fantasy",
            "url": "https://myanimelist.net/anime/genre/10/Fantasy"
        }
    ],
    "explicit_genres": [],
    "themes": [],
    "demographics": [
        {
            "mal_id": 27,
            "type": "anime",
            "name": "Shounen",
            "url": "https://myanimelist.net/anime/genre/27/Shounen"
        }
    ]
}

const App = () => {
  
  const [searchAnimeTitle, setSearch] = useState("");
  const [animes, mappedAnime] = useState([]);
    const searchAnime = async (title) => {
        const response = await fetch(`${API}${title}&sfw`);
        const data = await response.json();
        mappedAnime(data.data);
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
                <h2>No movies found</h2>
              </div>
            )}
        </div>
    );
};
 
export default App;