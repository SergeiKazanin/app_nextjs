"use client";
import style from "./index.module.scss";

export const FilterButtons = () => {
  return (
    <div className={style.filterButtons}>
      <ul className={style.filterButtons__ul}>
        <li>
          <button className={style.filterButtons__button}>Frontend</button>
        </li>
        <li>
          <button className={style.filterButtons__button}>Backend</button>
        </li>
      </ul>
    </div>
  );
};
