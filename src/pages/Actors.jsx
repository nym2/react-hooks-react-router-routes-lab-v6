import NavBar from "../components/NavBar";

const actors = [
  { name: "Benedict Cumberbatch", movies: ["Doctor Strange", "The Imitation Game", "Black Mass"] },
  { name: "Justin Timberlake", movies: ["Trolls", "Friends with Benefits", "The Social Network"] },
  { name: "Anna Kendrick", movies: ["Pitch Perfect", "Into The Wood"] },
  { name: "Tom Cruise", movies: ["Jack Reacher: Never Go Back", "Mission Impossible 4", "War of the Worlds"] },
];

function Actors() {
  try {
    if (!actors || actors.length === 0) {
      throw new Error("No actors found");
    }

    return (
      <>
        <NavBar />
        <header>
          <h1>Actors Page</h1>
        </header>
        <main>
          {actors.map((actor, index) => (
            <article key={index}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie, idx) => (
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
          <h1>Actors Not Available</h1>
        </header>
      </>
    );
  }
}

export default Actors;
