import { render } from "solid-js/web";
import { ErrorBoundary, JSX, lazy, Suspense, createSignal } from "solid-js";

import { Route, Router, useRoutes } from "@solidjs/router";

import routes from "./routes";

const App = (): JSX.Element => {
  const Routes = useRoutes(routes);
  return (
    <Suspense fallback={<>Main suspense</>}>
      <Router>
        <Routes />
      </Router>
    </Suspense>
  );
};

export default App
