import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <img
        src={
          movie.Poster !== 'N/A'
            ? movie.Poster
            : 'https://via.placeholder.com/400x600?text=No+Image'
        }
        alt={movie.Title}
        loading="lazy"
      />

      <div className="overlay">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  )
}

export default MovieCard
