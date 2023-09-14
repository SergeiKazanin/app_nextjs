import "./styles/vars.css";
import "./styles/reset.css";
import "./styles/index.css";
import "./styles/fonts.css";

import style from "./layout.module.scss";
import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Feedback } from "@/components/Feedback";

export const metadata: Metadata = {
  title: "Cyberia",
  description: "Cyberia web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={style.body}>
        <Header />
        <main className={style.layout}>{children}</main>
        <Feedback />
        <Footer />
      </body>
    </html>
  );
}
