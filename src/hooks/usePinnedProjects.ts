import { useEffect, useState } from "react";
import { getPinnedProjects } from "../services/github";

export function usePinnedProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getPinnedProjects().then(setProjects);
  }, []);

  return projects;
}