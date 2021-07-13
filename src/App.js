import { StrictMode, lazy, Suspense } from "react";
import { Route, Switch, Link } from "react-router-dom";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  return (
    <StrictMode>
      <div>
        <Suspense fallback={(<h2>Loading page...</h2>)}>
          <header>
            <Link to="/">
              <h1 className="site-title">Hey! Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </StrictMode>
  );
};

export default App;
