"use client";
import { getAllProjects } from "@/service/api";
import style from "./index.module.scss";
import useSWR from "swr";
import { Projects } from "@/models/models";
import { ProjectCard } from "../ProgectCard";

export default function ProjectsList() {
  const { data: projects, isLoading } = useSWR<Projects>(
    "project",
    getAllProjects
  );
  return isLoading ? (
    <div>Loading..</div>
  ) : (
    <div className={style.projectList}>
      {projects?.items.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
