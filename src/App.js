import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Hey! Adopt Me!</h1>
          </Link>
        </header>
      </Router>
    </div>
  )
};

render (
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
)