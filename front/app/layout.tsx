import type { Metadata } from "next";
import { Train_One, Tektur } from "next/font/google";
import "./globals.css";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import PageTransition from "./Components/PageTransition";

const trainOne = Train_One({
  weight: '400',
  variable: '--font-train-one',
  subsets: ['cyrillic']
})

const tektur = Tektur({
  variable: '--font-tektur',
  subsets: ['cyrillic-ext']
})

export const metadata: Metadata = {
  title: 'ПО "Полет"',
  description: "Производственное объединение «Полёт» — одно из крупнейших машиностроительных предприятий России, специализирующееся на выпуске ракетно-космической и авиационной техники.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${tektur.variable} ${trainOne.variable}`}>
        <div className="bg_opt"></div>
        <Navigation />
        <div className="content">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
      </body>
    </html>
  );
}
