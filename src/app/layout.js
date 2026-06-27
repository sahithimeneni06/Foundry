import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AIravatha",
  description: "Digital Design & Development Studio",
  openGraph: {
    title: "AIravatha",
    description: "Digital Design & Development Studio",
    images: [
      {
        url: "/logo.png",  // your OG image
        width: 1200,
        height: 630,
        alt: "Airavatha Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
