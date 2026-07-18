import "./globals.css";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";

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
  title: "TrustID — Bảo hộ và khai thác hợp pháp nhân dạng số",
  description:
    "Định chế đăng ký bảo hộ, cấp phép và thu hộ nhân dạng số, dưới sự bảo chứng của Hiệp hội bảo chứng nhân dạng số.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${notoSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
