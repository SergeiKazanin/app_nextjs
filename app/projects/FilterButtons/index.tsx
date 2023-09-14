"use client";
import useSWR from "swr";
import style from "./index.module.scss";
import { getCategories } from "@/service/api";
import { CategoriesSearch } from "@/models/models";
import { MouseEvent } from "react";
import { useSearch } from "@/service/store";
export const FilterButtons = () => {
  const { data: categories, isLoading } = useSWR<CategoriesSearch>(
    "category",
    getCategories
  );
  const addFilter = useSearch((state) => state.addFilter);
  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const input = e.target as HTMLElement;
    addFilter(input.innerText);
    const buttons = document.getElementsByClassName(
      style.filterButtons__button
    );

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].innerHTML === input.innerText) {
        if (buttons[i].classList.contains(style.filterButtons__buttonActive)) {
          buttons[i].classList.remove(style.filterButtons__buttonActive);
          addFilter("");
        } else {
          for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove(style.filterButtons__buttonActive);
          }
          buttons[i].classList.add(style.filterButtons__buttonActive);
        }
      }
    }
  };

  return (
    <div className={style.filterButtons}>
      <ul className={style.filterButtons__ul}>
        {categories?.items.map((category) => (
          <li key={category.id}>
            <button
              onClick={(e) => handleClick(e)}
              className={style.filterButtons__button}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
