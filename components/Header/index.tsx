import React from "react";
import style from "./index.module.scss";

import Logo from "./images/logo.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={style.header}>
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
      </div>
    </header>
  );
};
