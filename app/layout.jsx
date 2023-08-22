import "./globals.css";
import ThemeRegistry from "../src/components/ThemeRegistry/ThemeRegistry";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "auto",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Rein's Portfolio",
  description: "Rein Buenaventura's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="tw-scroll-smooth">
      <ThemeRegistry>
        <body
          className={`${inter.variable} tw-font-main tw-scrollbar-thin tw-scrollbar-thumb-accntColor tw-scrollbar-track-prmColor`}
        >
          {children}
        </body>
      </ThemeRegistry>
    </html>
  );
}
