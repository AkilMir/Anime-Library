import React from 'react';

const AnimeCard = ({anime: { year, images, title, type } }) => {
    return (
        <div className = "anime">
            <div>
                <p>{year}</p>
            </div>
            <div>
                <img src={images.jpg.image_url !== 'N/A' ? images.jpg.image_url : 'https://via.placeholder.com/400'} alt={title}/>
            </div>
            <div>
                <span>{type}</span>
                <h3>{title}</h3>
            </div>
        </div>
    )
}
export default AnimeCard;