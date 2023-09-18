"use client";
import style from "./index.module.scss";
import Group from "../../assets/Group 1347.svg";
import Paper from "../../assets/Paperclip.svg";
import Cancel from "../../assets/CancelFeed.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import cl from "classnames";
import { useRef, useState } from "react";
import { FormErrors, Values } from "@/models/models";
import React from "react";

import { sendFeedback } from "@/service/api";

export const Feedback = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showOkFeed, setShowOkFeed] = useState("");
  const [showNotFeed, setShowNotFeed] = useState("");
  const errorRef = useRef<HTMLDivElement>(null);

  const formik = useFormik<Values>({
    initialValues: {
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .min(6, "Слишком корткий!")
        .max(12, "Слишком длинный!")
        .required("Обязательное поле"),
      email: Yup.string().email("Неверный email").required("Обязательное поле"),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("message", values.message);
      if (values.attachment?.name) {
        formData.append("attachment", values.attachment);
      }
      const resp = await sendFeedback(formData);
      const respData: FormErrors = await resp.json();
      if (resp.ok) {
        if (respData.message === "Feedback accepted.") {
          setShowOkFeed(style.feedback__feedShow);
        } else if (respData.message === "Validation errors") {
          if (errorRef.current) {
            const errors = Object.values(respData.errors);
            errorRef.current.innerHTML = errors
              .map((error) => error[0])
              .join("<br/>");
            setShowNotFeed(style.feedback__feedShow);
          }
        }
      } else if (resp.status === 422) {
        setShowNotFeed(style.feedback__feedShow);
      }
    },
  });
  const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      formik.setFieldValue("attachment", e.target.files[0]);
    }
  };

  return (
    <div className={style.feedback}>
      <div className={style.feedback__container}>
        <div className={style.feedback__textGroup}>
          <Group className={style.feedback__textGroupSvg} />
          <h1 className={style.feedback__textHeader}>
            Расскажите <br /> о вашем проекте
          </h1>
          <span className={style.feedback__text}>
            Поделитесь с нами информацией, чем мы можем быть полезны:
            реализовать идею или выделить разработчиков для ИТ-команды. Чем
            больше вы нам расскажете — тем продуктивнее будет дальнейшее
            обсуждение.
          </span>
        </div>

        <form className={style.feedback__form} onSubmit={formik.handleSubmit}>
          <div className={style.feedback__input}>
            <input
              className={cl(
                style.feedback__inputControl,
                formik.errors.email && formik.touched.email
                  ? style.feedback__inputControlError
                  : ""
              )}
              id="email"
              name="email"
              type="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label
              className={cl(
                style.feedback__label,
                formik.values.email.length ? style.feedback__inputOnText : "",
                formik.errors.email && formik.touched.email
                  ? style.feedback__labelError
                  : ""
              )}
              htmlFor="email"
            >
              Email
            </label>
            {formik.touched.email && formik.errors.email ? (
              <div className={style.feedback__formError}>
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className={style.feedback__input}>
            <input
              className={cl(
                style.feedback__inputControl,
                formik.errors.phone && formik.touched.phone
                  ? style.feedback__inputControlError
                  : ""
              )}
              id="phone"
              name="phone"
              type="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            <label
              className={cl(
                style.feedback__label,
                formik.values.phone.length ? style.feedback__inputOnText : "",
                formik.errors.phone && formik.touched.phone
                  ? style.feedback__labelError
                  : ""
              )}
              htmlFor="phone"
            >
              Телефон
            </label>
            {formik.touched.phone && formik.errors.phone ? (
              <div className={style.feedback__formError}>
                {formik.errors.phone}
              </div>
            ) : null}
          </div>
          <div className={style.feedback__inputText}>
            <textarea
              className={style.feedback__inputControlText}
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            <label
              className={cl(
                style.feedback__label,
                formik.values.message.length ? style.feedback__inputOnText : ""
              )}
              htmlFor="message"
            >
              Сообщение
            </label>
            <Paper
              onClick={() => {
                if (inputRef.current) inputRef.current.click();
              }}
              className={style.feedback__paperSvg}
            />
            <div
              className={cl(
                style.feedback__filesDiv,
                formik.values.attachment?.name ? style.feedback__fileOn : ""
              )}
            >
              <span className={style.feedback__fileName}>
                {formik.values.attachment?.name}
              </span>
              <span className={style.feedback__fileSize}>
                {formik.values.attachment?.size}
              </span>
              <Cancel
                onClick={() => {
                  formik.setFieldValue("attachment", {});
                  if (inputRef.current) {
                    inputRef.current.value = "";
                  }
                }}
                className={style.feedback__cancelSvg}
              />
            </div>
            <input
              ref={inputRef}
              onChange={(e) => handleChangeFile(e)}
              className={style.feedback__file}
              type="file"
            />
          </div>
          <div className={style.feedback__submit}>
            <button className={style.feedback__button} type="submit">
              Отправить
            </button>
            <span className={style.feedback__desc}>
              Нажимая “Отправить”, Вы даете согласие на обработку персональных
              данных
            </span>
          </div>
          <div className={cl(style.feedback__feedOk, showOkFeed)}>
            Ваша заявка успешно отправлена
          </div>
          <div
            ref={errorRef}
            className={cl(style.feedback__feedNot, showNotFeed)}
          >
            Не удалось отрпавить заявку, повторите отправку позднее
          </div>
        </form>
      </div>
    </div>
  );
};
