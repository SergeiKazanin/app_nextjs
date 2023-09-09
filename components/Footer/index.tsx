import style from "./index.module.scss";

import Logo from "./images/logo.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__logo}>
          <Link href={"/"}>
            <Logo className={style.footer__logoSvg} />
          </Link>
          <span>Web and machine learning developing company</span>
        </div>
        <div className={style.footer__linkFlex}>
          <ul className={style.footer__ul}>
            <li>
              <a className={style.footer__link} href="tel:+7 960 959 18 66">
                +7 960 959 18 66
              </a>
            </li>
            <li>
              <a
                className={style.footer__link}
                href="mailto:hello@cyberia.studio"
              >
                hello@cyberia.studio
              </a>
            </li>
            <li>
              <a
                className={style.footer__link}
                target="_blank"
                rel="noreferrer"
                href="https://yandex.ru/maps/-/CCUFNLT73A"
              >
                г.Барнаул, ул.Аносова, д.3б, оф.8
              </a>
            </li>
          </ul>
          <ul className={style.footer__ul}>
            <li>
              <Link className={style.footer__link} href={"/"}>
                Главная
              </Link>
            </li>
            <li>
              <Link className={style.footer__link} href={"/about "}>
                О нас
              </Link>
            </li>
            <li>
              <Link className={style.footer__link} href={"/services"}>
                Услуги
              </Link>
            </li>
          </ul>
          <ul className={style.footer__ul}>
            <li>
              <Link className={style.footer__link} href={"/projects"}>
                Проекты
              </Link>
            </li>
            <li>
              <Link className={style.footer__link} href={"/vacancies"}>
                Вакансии
              </Link>
            </li>{" "}
            <li>
              <Link className={style.footer__link} href={"/team"}>
                Команда
              </Link>
            </li>
          </ul>
        </div>
        <div className={style.footer__copyright}>
          © 2023, digital-агентство Cyberia
          <br />
          <Link className={style.footer__link} href={"/"}>
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};
