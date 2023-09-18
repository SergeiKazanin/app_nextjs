"use client";
import cl from "classnames";
import style from "./index.module.scss";
import Sun from "../../../assets/sun.svg";
import Moon from "../../../assets/moon.svg";
import { useState } from "react";

export const ThemeSwitcher = () => {
  const [isActive, setIsActive] = useState(false);

  const handleActiveTheme = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className={cl(
        style.header__themeSwitcher,
        isActive ? style.header__themeSwitcher_active : ""
      )}
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
