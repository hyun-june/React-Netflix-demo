import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import imdb from "../../img/imdb.png";
import people from "../../img/people.png";
import adult from "../../img/adult.png";
import all from "../../img/all.png";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {

  const {data:genreData}= useMovieGenreQuery();
  
  const showGenre=(genreIdList)=>{
    if(!genreData) return []
    const genreNameList = genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id === id);
      return genreObj.name;
    }) 

    return genreNameList
  }

  return (
    <div style={{backgroundImage:"url(" +`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`+")",}}
      className="movie-card">
      <div className="overlay">
        <h1>{movie.title}</h1>
        {showGenre(movie.genre_ids).map((id) => (<Badge bg="danger">{id}</Badge>))}
        <div className="movie-detail">
          <div><img src={imdb} alt="" width="20" />{movie.vote_average}</div>
          <div><img src={people} alt="" width="20" />{movie.popularity}</div>
          <div><img src={movie.adult ? adult : all} alt="" width="20" /></div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
