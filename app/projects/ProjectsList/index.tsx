"use client";
import { getAllProjects } from "@/service/api";
import style from "./index.module.scss";
import useSWR from "swr";
import { Projects } from "@/models/models";
import { ProjectCard } from "../ProjectCard";
import { useSearch } from "@/service/store";

export default function ProjectsList() {
  const { data: projects, isLoading } = useSWR<Projects>(
    "project",
    getAllProjects
  );
  const search = useSearch((store) => store.search);

  const filter = (projects: Projects, filterValues: string) => {
    let outProjects: Projects = { items: [] };
    if (filterValues.length === 0) {
      return projects;
    }
    for (let i = 0; i < projects.items.length; i++) {
      for (let j = 0; j < projects.items[i].categories?.length; j++)
        if (projects.items[i].categories[j].id.toString() === filterValues) {
          outProjects.items.push(projects.items[i]);
        }
    }
    return outProjects;
  };
  let pr: Projects = { items: [] };
  if (projects) {
    pr = filter(projects, search);
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className={style.projectList}>
      {pr.items.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
