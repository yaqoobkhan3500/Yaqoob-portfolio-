import { Open_Sans, Archivo_Black, Archivo_Narrow } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-hf", display: "swap" });
const archivoNarrow = Archivo_Narrow({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-nf", display: "swap" });

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-open",
  display: "swap",
});

export const metadata = {
  title: "Yaqoob Khan – Full-Stack Web Developer",
  description:
    "Full-stack web developer building modern, responsive, and user-friendly web applications with HTML5, CSS3, JavaScript, Node.js, MongoDB, and MySQL.",
  icons: { icon: "/assets/logo.png" },
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${archivoBlack.variable} ${archivoNarrow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
