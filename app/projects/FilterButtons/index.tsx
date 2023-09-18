"use client";
import useSWR from "swr";
import style from "./index.module.scss";
import { getCategories } from "@/service/api";
import { CategoriesSearch } from "@/models/models";
import { MouseEvent, useRef } from "react";
import { useSearch } from "@/service/store";

export const FilterButtons = () => {
  const { data: categories } = useSWR<CategoriesSearch>(
    "category",
    getCategories
  );
  const buttonsRef = useRef<HTMLUListElement>(null);
  const addFilter = useSearch((state) => state.addFilter);
  const handleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    const input = e.target as HTMLElement;
    addFilter(input.id);

    let buttonsList: HTMLCollection = {} as HTMLCollection;
    if (buttonsRef.current) {
      buttonsList = buttonsRef.current.children;
    }
    for (let i = 0; i < buttonsList.length; i++) {
      if (buttonsList[i].id === input.id) {
        if (
          buttonsList[i].classList.contains(style.filterButtons__buttonActive)
        ) {
          buttonsList[i].classList.remove(style.filterButtons__buttonActive);
          addFilter("");
        } else {
          for (let i = 0; i < buttonsList.length; i++) {
            buttonsList[i].classList.remove(style.filterButtons__buttonActive);
          }
          buttonsList[i].classList.add(style.filterButtons__buttonActive);
        }
      }
    }
  };

  return (
    <div className={style.filterButtons}>
      <ul ref={buttonsRef} className={style.filterButtons__ul}>
        {categories?.items.map((category) => (
          <button
            onClick={(e) => handleClick(e)}
            key={category.id}
            className={style.filterButtons__button}
            id={category.id.toString()}
          >
            {category.name}
          </button>
        ))}
      </ul>
    </div>
  );
};
