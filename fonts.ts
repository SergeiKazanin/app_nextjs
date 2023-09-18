import { Open_Sans, Rubik } from "next/font/google";

export const open_sans = Open_Sans({
  subsets: ["cyrillic"],
  style: "normal",
  weight: "400",
  display: "swap",
  variable: "--font-open-sans",
});
export const rubikMedium = Rubik({
  subsets: ["cyrillic"],
  style: "normal",
  weight: "500",
  display: "swap",
  variable: "--font--rubik-medium",
});
export const rubikRegular = Rubik({
  subsets: ["cyrillic"],
  style: "normal",
  weight: "400",
  display: "swap",
  variable: "--font-rubik-regular",
});
