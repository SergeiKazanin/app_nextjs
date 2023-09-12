"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.scss";

import Logo from "./images/logo.svg";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import cl from "classnames";

export const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [scrollPos, setScrollPoss] = useState("");

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const prevScroll = useRef<number>(0);

  useEffect(() => {
    const prev = prevScroll.current;
    if (scroll < prev) {
      setScrollPoss(style.header__scrollUp);
    } else if (scroll > prev) {
      setScrollPoss(style.header__scrollDown);
    }
    prevScroll.current = scroll;
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cl(style.header, scrollPos)}>
      <div className={style.header__container}>
        <Link href={"/"}>
          <Logo className={style.header__logo} />
        </Link>
        <ul className={style.header__navigation}>
          <li>
            <Link className={style.header__link} href={"/about "}>
              О нас
            </Link>
          </li>
          <li>
            <Link className={style.header__link} href={"/services"}>
              Услуги
            </Link>
          </li>
          <li>
            <Link className={style.header__link} href={"/projects"}>
              Проекты
            </Link>
          </li>
          <li>
            <Link className={style.header__link} href={"/vacancies"}>
              Вакансии
            </Link>
          </li>
          <li>
            <Link className={style.header__link} href={"/contacts"}>
              Контакты
            </Link>
          </li>
        </ul>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
