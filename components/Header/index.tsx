"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.scss";

import Logo from "./images/logo.svg";
import Menu from "./images/Menu.svg";
import Close from "./images/Close.svg";

import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";
import cl from "classnames";

export const Header = () => {
  const [scroll, setScroll] = useState(0);
  const [scrollPos, setScrollPoss] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const prevScroll = useRef<number>(0);

  useEffect(() => {
    const prev = prevScroll.current;
    if (!isOpen) {
      if (scroll < prev) {
        setScrollPoss(style.header__scrollUp);
      } else if (scroll > prev) {
        setScrollPoss(style.header__scrollDown);
      }
      if (scroll === 0) {
        setScrollPoss("");
      }
    }
    prevScroll.current = scroll;
  }, [scroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickLink = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={cl(
        style.header,
        scrollPos,
        isOpen ? style.header__menuIsOpen : ""
      )}
    >
      <div className={style.header__container}>
        <Link className={style.header__logoLink} href={"/"}>
          <Logo className={style.header__logo} />
        </Link>
        <ul className={style.header__navigation}>
          <li onClick={() => handleClickLink()}>
            <Link className={style.header__link} href={"/"}>
              Главная
            </Link>
          </li>
          <li onClick={() => handleClickLink()}>
            <Link className={style.header__link} href={"/about"}>
              О нас
            </Link>
          </li>
          <li onClick={() => handleClickLink()}>
            <Link className={style.header__link} href={"/services"}>
              Услуги
            </Link>
          </li>
          <li onClick={() => handleClickLink()}>
            <Link className={style.header__link} href={"/projects"}>
              Проекты
            </Link>
          </li>
          <li onClick={() => handleClickLink()}>
            <Link className={style.header__link} href={"/vacancies"}>
              Вакансии
            </Link>
          </li>
          <li onClick={() => handleClickLink()}>
            <Link className={style.header__link} href={"/contacts"}>
              Контакты
            </Link>
          </li>
        </ul>
        <div className={style.header__menuSwitcher}>
          <ThemeSwitcher />
        </div>
        <div className={style.header__contacts}>
          <span className={style.header__contactsTitle}>Контакты:</span>
          <ul className={style.header__contactsList}>
            <li>
              <a
                className={style.header__contactsLink}
                href="tel:+7 960 959 18 66"
              >
                +7 960 959 18 66
              </a>
            </li>
            <li>
              <a
                className={style.header__contactsLink}
                href="mailto:hello@cyberia.studio"
              >
                hello@cyberia.studio
              </a>
            </li>
            <li>
              <a
                className={style.header__contactsLink}
                target="_blank"
                rel="noreferrer"
                href="https://yandex.ru/maps/-/CCUFNLT73A"
              >
                г.Барнаул, ул.Аносова, д.3б, оф.8
              </a>
            </li>
          </ul>
        </div>
        <Menu
          onClick={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true);
          }}
          className={cl(
            style.header__menuSvg,
            isOpen ? style.header__menuSvgOff : ""
          )}
        />
        <Close
          onClick={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true);
          }}
          className={cl(
            style.header__menuSvg,
            isOpen ? "" : style.header__menuSvgOff
          )}
        />
      </div>
    </header>
  );
};
