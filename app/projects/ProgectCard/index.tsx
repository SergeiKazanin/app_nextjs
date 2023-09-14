import { Project } from "@/models/models";
import style from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

import Group from "./images/Group 1207.svg";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link className={style.projectCard__link} href={"/"}>
      <div
        style={{
          backgroundImage: `url(${project.image_dark})`,
        }}
        className={style.projectCard}
      >
        <span className={style.projectCard__description}>
          {project.categories.map((cat) => cat.name)}
        </span>
        <Group className={style.projectCard__svg} />
        <span className={style.projectCard__title}>{project.title}</span>
        <span className={style.projectCard__description}>
          {project.description}
        </span>
      </div>
    </Link>
  );
};
