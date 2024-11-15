import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movieDetails = {
  1: { title: "Doctor Strange", time: "115", genres: ["Action", "Adventure", "Fantasy"] },
  2: { title: "Trolls", time: "92", genres: ["Animation", "Comedy", "Family"] },
  3: { title: "Jack Reacher: Never Go Back", time: "118", genres: ["Action", "Crime", "Thriller"] },
};

function Movie() {
  const { id } = useParams();
  const movie = movieDetails[id];

  if (!movie) {
    return (
      <>
        <NavBar />
        <header>
          <h1>Movie Not Found</h1>
        </header>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <header>
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>{movie.time}</p>
        {movie.genres && movie.genres.length > 0 ? (
          movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))
        ) : (
          <span>No genres available</span>
        )}
      </main>
    </>
  );
}

export default Movie;
