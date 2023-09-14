import Link from "next/link";
import style from "./page.module.scss";
import { FilterButtons } from "./FilterButtons";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  return (
    <div className={style.projects__container}>
      <div className={style.projects__navElem}>
        <Link className={style.projects__linkMain} href={"/"}>
          Главная
        </Link>
        <span className={style.projects__textHead}> / Проекты</span>
      </div>
      <h1 className={style.projects__HeaderPage}>Проекты</h1>
      <FilterButtons />
      <ProjectsList />
    </div>
  );
}
