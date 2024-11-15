import NavBar from "../components/NavBar";

const directors = [
  { name: "Scott Derrickson", movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"] },
  { name: "Mike Mitchell", movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"] },
  { name: "Edward Zwick", movies: ["Jack Reacher: Never Go Back", "Blood Diamond", "The Siege"] },
];

function Directors() {
  try {
    if (!directors || directors.length === 0) {
      throw new Error("No directors found");
    }

    return (
      <>
        <NavBar />
        <header>
          <h1>Directors Page</h1>
        </header>
        <main>
          {directors.map((director, index) => (
            <article key={index}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map((movie, idx) => (
                  <li key={idx}>{movie}</li>
                ))}
              </ul>
            </article>
          ))}
        </main>
      </>
    );
  } catch (error) {
    console.error(error); // Error caught and logged
    return (
      <>
        <NavBar />
        <header>
          <h1>Directors Not Available</h1>
        </header>
      </>
    );
  }
}

export default Directors;
