import "./styles/vars.css";
import "./styles/reset.css";
import "./styles/index.css";

import style from "./layout.module.scss";
import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Feedback } from "@/components/Feedback";

export const metadata: Metadata = {
  title: "Cyberia",
  description: "Cyberia web",
};
import React from "react";
import cl from "classnames";
import { rubikMedium, open_sans, rubikRegular } from "@/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cl(
          style.body,
          open_sans.variable,
          rubikMedium.variable,
          rubikRegular.variable
        )}
      >
        <Header />
        <main className={style.layout}>{children}</main>
        <Feedback />
        <Footer />
      </body>
    </html>
  );
}
