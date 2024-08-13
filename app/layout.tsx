import "./globals.css";
import { Montserrat, Staatliches, Nanum_Pen_Script } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});

const staatliches = Staatliches({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-staatliches",
});

const nanum_pen_script = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nanum-pen-script",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${staatliches.variable} ${nanum_pen_script.variable}`}
    >
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
