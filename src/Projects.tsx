import { Component, For, Setter } from "solid-js";

import { useRouteData } from '@solidjs/router'

const Projects = () => {
  const projectState: {name: string}[] = useRouteData();

  return (
    <ul>
      <li>This should trigger the error boundary but its not</li>
      <For each={projectState}>
        {(project) => <li>{project.name}</li>}
      </For>
    </ul>
  );
};

export default Projects;
