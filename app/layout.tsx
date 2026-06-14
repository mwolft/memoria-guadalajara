import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const title = "Estimulación cognitiva a domicilio en Guadalajara";
const description =
  "Estimulación cognitiva para personas mayores en Guadalajara. Atención a domicilio, acompañamiento profesional y sesiones personalizadas.";
const heroImage =
  "https://res.cloudinary.com/dhm8zqtkq/image/upload/v1781419090/a-domicilio_yhmzlf.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://memoriaguadalajara.com"),
  title,
  description,
  alternates: {
    canonical: "https://memoriaguadalajara.com/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: heroImage,
        alt: "Sesión de estimulación cognitiva a domicilio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [heroImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
