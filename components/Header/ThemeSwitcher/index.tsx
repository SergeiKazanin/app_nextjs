"use client";
import cl from "classnames";
import style from "./index.module.scss";
import Sun from "../images/sun.svg";
import Moon from "../images/moon.svg";
import { useState } from "react";

export const ThemeSwitcher = () => {
  const [active, setActive] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleActiveTheme = () => {
    if (isActive) {
      setIsActive(false);
      setActive("");
    } else {
      setIsActive(true);
      setActive(style.header__themeSwitcher_active);
    }
  };

  return (
    <div
      className={cl(style.header__themeSwitcher, active)}
      onClick={() => handleActiveTheme()}
    >
      <div className={style.header__themeSwitcherRect}>
        <Moon className={style.header__themeSwitcherRectMoon} />
        <Sun className={style.header__themeSwitcherRectSun} />
      </div>
      <div className={style.header__themeSwitcherCircle}>
        <Moon className={style.header__themeSwitcherCircleMoon} />
        <Sun className={style.header__themeSwitcherCircleSun} />
      </div>
    </div>
  );
};
