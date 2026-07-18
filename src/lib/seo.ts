import { siteMeta } from "@/data/site";

/** URL ảnh OG (Route Handler sinh động, prerender tĩnh). */
export const OG_IMAGE = {
  url: "/og-image",
  width: 1200,
  height: 630,
  alt: "TrustID — Chứng nhận bảo hộ nhân dạng số",
  type: "image/png",
};

/**
 * Tạo metadata cho một trang (bổ sung lên metadata gốc ở layout).
 * `path` dùng cho canonical + og:url; `index=false` để chặn lập chỉ mục.
 */
export const pageMetadata = ({ title, description, path = "/", index = true }: any) => {
  const desc = description || siteMeta.description;
  const heading = typeof title === "string" ? title : siteMeta.titleDefault;
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    ...(index ? {} : { robots: { index: false, follow: false } }),
    openGraph: {
      type: "website",
      siteName: siteMeta.name,
      locale: siteMeta.locale,
      url: path,
      title: heading,
      description: desc,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: heading,
      description: desc,
      images: [OG_IMAGE.url],
    },
  };
};
