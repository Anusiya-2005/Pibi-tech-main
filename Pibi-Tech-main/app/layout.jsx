import { Geist, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalLocations from "@/components/GlobalLocations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Figtree({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pibi Tech - AI Transformation Solutions",
  description:
    "Pibi Tech is a leading provider of AI transformation solutions that craft unique competitive advantages through agentic orchestration. We re-engineer your business to become future-ready with 5× growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <main>
          <Navbar />
          {children}
          <GlobalLocations />
          <Footer />
        </main>
      </body>
    </html>
  );
}
