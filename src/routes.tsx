import { ErrorBoundary, lazy, Suspense } from "solid-js";

import { RouteDefinition } from "@solidjs/router";

import useFindAllProject from "./useFindAllProject";
import Home from "./Home";
import MainLayout from "./MainLayout";

const ProjectsLayout = lazy(() => import("./ProjectsLayout"));
const Projects = lazy(() => import("./Projects"));
const Project = lazy(() => import("./Project"));

const Contact = lazy(async () => {
  // used to debug suspense...
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return import("./Contact");
});

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "/projects",
        data: useFindAllProject,
        component: () => (
          <ErrorBoundary fallback={(e) => <>{e.message}</>}>
            <Suspense fallback={<>LOADING</>}>
              <ProjectsLayout />
            </Suspense>
          </ErrorBoundary>
        ),
        children: [
          {
            path: "/",
            component: () => (
              <Suspense fallback={<>LOADING</>}>
                <Projects />
              </Suspense>
            ),
          },
          {
            path: "/:projectId",
            component: () => (
              <Suspense fallback={<>LOADING</>}>
                <Project />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/contact",
        component: () => (
          <Suspense fallback={<>LOADING</>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
