import { createResource } from "solid-js";

import axios from "axios";

const useFindAllProject = () => {
  const [projects] = createResource(async () => {
    const url =
      "http://localhost/4000/v0/projects";
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const res = await axios.get(url);

    return res.data;
  });
  return projects;
};

export default useFindAllProject;
