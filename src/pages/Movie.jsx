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

  // Suppress errors from console.log
  try {
    if (!movie) {
      throw new Error("Movie not found");
    }

    return (
      <>
        <NavBar />
        <header>
          <h1>{movie.title}</h1>
        </header>
        <main>
          <p>{movie.time} mins</p>
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre}</span>
          ))}
        </main>
      </>
    );
  } catch (error) {
    console.error(error); // This is logged if necessary
    return (
      <>
        <NavBar />
        <header>
          <h1>Movie Not Found</h1>
        </header>
      </>
    );
  }
}

export default Movie;
