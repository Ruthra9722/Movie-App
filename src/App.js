import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [movie, setMovie] = useState([]);
  const [fav, setFav] = useState([]);

  async function movieapi() {
    axios
      .get("https://fake-movie-database-api.herokuapp.com/api?s=batman")
      .then((res) => {
        console.log(res.data.Search);
        setMovie(res.data.Search);
      });
  }
  useEffect(() => {
    movieapi();
  }, []);

  return (
    <>
      <div className="ab">
        <h1>Movies</h1>
        <input className="abc" id="abcd"></input>
        <button
          onClick={() => {
            const name = document.getElementById("abcd").value;
            console.log(name);
            setMovie(movie.filter((i) => i.Title === name));
          }}
          className="abc"
        >
          submit
        </button>
      </div>

      <div className="movie">
        {movie.map((item, i) => (
          <>
            <img
              src={item.Poster}
              alt="movie"
              onClick={() => setFav([...fav, item])}
              className="mov"
            ></img>
          </>
        ))}
      </div>
      <div>
        <h1>Favorities</h1>
        {fav.map((item, i) => (
          <img src={item.Poster} className="mov"></img>
        ))}
      </div>
    </>
  );
}

export default App;
