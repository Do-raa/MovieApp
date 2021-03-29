import {useState} from 'react'
import './App.css';
import AddMovie from './Components/AddMovie';
import MovieList from './Components/MovieList';
import {moviesData} from './Components/MoviesData';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'; 


function App() {
  const [movie,setMovie] = useState(moviesData)
  const [ratingSearch,setRatingSearch] = useState("")
  const [name,setName] = useState("")
  console.log("movies" , movie)
  const Addfilm =(newmovie)=>{
    return setMovie([...movie , newmovie])
  }
  return (
    <div className="App">
      <NavBar ratingSearch={ratingSearch} setRatingSearch={setRatingSearch} name={name} setName={setName} />
     <MovieList movie={movie} ratingSearch={ratingSearch}  name={name} />
     <AddMovie  Addfilm={Addfilm}/>
    </div>
  );
}

export default App;

