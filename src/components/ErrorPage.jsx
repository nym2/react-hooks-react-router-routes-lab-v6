import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h2>Oops! Looks like something went wrong.</h2>
      <p>Click <Link to="/">here</Link> to go back home.</p>
    </div>
  );
}

export default ErrorPage;
