import { Project } from "@/models/models";
import style from "./index.module.scss";
import Link from "next/link";

import Group from "../../../assets/Group 1207.svg";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link className={style.projectCard__link} href={"/"}>
      <div
        style={{
          backgroundImage: `url(${project.image_dark})`,
        }}
        className={style.projectCard}
      >
        <Group className={style.projectCard__svg} />
        <span className={style.projectCard__title}>{project.title}</span>
        <span className={style.projectCard__description}>
          {project.description}
        </span>
      </div>
    </Link>
  );
};
