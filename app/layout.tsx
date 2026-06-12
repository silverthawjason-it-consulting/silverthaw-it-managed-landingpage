import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";

// --f-serif: 'Playfair Display' — pesos usados en el diseño original
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

// --f-sans: 'Open Sans'
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Managed IT Services Provider in Toronto & Ontario | Silverthaw Consulting",
  description:
    "Silverthaw Consulting is Toronto's dedicated managed IT services provider for small and medium businesses across Ontario and the Greater Toronto Area. IT support, cybersecurity, and software strategy — one partner, full accountability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${openSans.variable}`}
    >
      <body className="bg-white font-sans leading-relaxed text-ink-body antialiased">
        {children}
      </body>
    </html>
  );
}
