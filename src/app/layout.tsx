import "./globals.css";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";
import { siteMeta } from "@/data/site";
import { OG_IMAGE } from "@/lib/seo";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.titleDefault,
    template: siteMeta.titleTemplate,
  },
  description: siteMeta.description,
  applicationName: siteMeta.name,
  keywords: siteMeta.keywords,
  authors: [{ name: siteMeta.name, url: siteMeta.url }],
  creator: siteMeta.name,
  publisher: siteMeta.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    siteName: siteMeta.name,
    locale: siteMeta.locale,
    url: siteMeta.url,
    title: siteMeta.titleDefault,
    description: siteMeta.description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.titleDefault,
    description: siteMeta.description,
    images: [OG_IMAGE.url],
  },
};

export const viewport = {
  themeColor: "#19283d",
  width: "device-width",
  initialScale: 1,
};

const RootLayout = ({ children }) => {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${notoSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
