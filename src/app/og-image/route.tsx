import { renderCertificateOG } from "@/lib/ogImage";

/** Ảnh OG (1200×630) phục vụ tại /og-image, prerender tĩnh lúc build. */
export const dynamic = "force-static";

export const GET = () => renderCertificateOG();
