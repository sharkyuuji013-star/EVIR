import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Your Name | Full Stack Developer",
  description:
    "Full stack developer portfolio — building clean, performant web applications with modern tools.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jetbrains.variable} dark`}
    >
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}
