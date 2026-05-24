// import React, { useEffect, useState } from 'react'
// import './App.css'
// import MovieCard from './MovieCard'
// import SearchIcon from './search.svg'

// const API_URL = 'https://www.omdbapi.com/?apikey=9d881717'

// function App() {
//   const [movies, setMovies] = useState([])
//   const [searchTerm, setSearchTerm] = useState('Batman')

//   const searchMovies = async (title) => {
//     try {
//       const response = await fetch(`${API_URL}&s=${title}`)
//       const data = await response.json()

//       console.log(data)

//       if (data.Response === 'True') {
//         setMovies(data.Search)
//       } else {
//         setMovies([])
//         console.log(data.Error)
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     searchMovies('Batman')
//   }, [])

//   return (
//     <div className="app">
//       <h1>MovieSpace</h1>

//       <div className="search">
//         <input
//           placeholder="Search for movies"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <img
//   src="https://img.icons8.com/ios-filled/50/ffffff/search--v1.png"
//   alt="search"
//   onClick={() => searchMovies(searchTerm)}
// />
//       </div>

//       {movies.length > 0 ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <MovieCard key={movie.imdbID} movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './MovieCard'

const API_URL = 'https://www.omdbapi.com/?apikey=9d881717'

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('Batman')
  const [loading, setLoading] = useState(false)

  const searchMovies = async (title) => {
    if (!title) return

    setLoading(true)

    try {
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json()

      if (data.Response === 'True') {
        setMovies(data.Search)
      } else {
        setMovies([])
      }
    } catch (error) {
      console.log(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    searchMovies('Batman')
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchMovies(searchTerm)
    }
  }

  return (
    <div className="app">
      <h1>MovieSpace</h1>

      <div className="search">
        <input
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={() => searchMovies(searchTerm)}>
          🔍
        </button>
      </div>

      {loading ? (
        <div className="loading">
          <h2>Loading movies...</h2>
        </div>
      ) : movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App