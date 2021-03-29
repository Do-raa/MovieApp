import React from 'react'
import Rating from './Rating'
import "./MovieCard.css"
const MovieCard = ( {film , key}) => {
    
    return (
        <div>
        <div hey={key}>

<div class="wrapper">

<div class="cards">

    <figure class="card">

        <img src={film.url} />

        <figcaption style={{color:"#24282f"}}>{film.name}</figcaption>
        
    </figure>
    <span> <Rating rate ={film.rate}/> </span>
</div>



</div>

        </div>
        
        </div>
    )
}

export default MovieCard
