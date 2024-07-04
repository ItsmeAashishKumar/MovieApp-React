import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg' 
import MovieCard from './MovieCard'
//
function App() { 
  //acdf086b
  const [movies,setMovie]=useState([])
  const [search,setSearch]=useState('')

/*  const movie={
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
}*/
  const Api_Url="http://www.omdbapi.com/?apikey=acdf086b"
  
  const searchMovies=async(title)=>{
    const response=await fetch(`${Api_Url}&s=${title}`);
    const data=await response.json()

    setMovie(data.Search)
  }
  useEffect(()=>{
    searchMovies('SuperMan')
  },[])
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
        placeholder='Search for Movies'
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}/>
      

        <img
        src={SearchIcon}
        alt="Search"
        onClick={()=>{searchMovies(search)}}/>
      </div>

      {
        movies?.length>0?(
          <div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie={movie}/>
            ))}
          
        </div>
        ):
        (
          <div className='empty'>
            No Movies Found
          </div>
        )
      }
        
        
    </div>
  )
}

export default App
