import Link from "next/link";
import { org } from "@/data/site";

/** Chân trang gọn cho các trang ứng dụng nội bộ. */
export const AppFooter = () => {
  return (
    <footer className="border-t border-line bg-white px-8 py-5">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 text-[12.5px] text-[#9aa6b6]">
        <span>© 2026 TrustID · Giấy phép hoạt động số {org.license}</span>
        <span className="inline-flex flex-wrap items-center gap-3.5">
          <span>Căn cứ: Luật 91/2025/QH15 · NĐ 356/2025/NĐ-CP · NĐ 69/2024/NĐ-CP</span>
          <Link href="#">Chính sách dữ liệu</Link>
          <Link href="#">Điều khoản</Link>
        </span>
      </div>
    </footer>
  );
};

export default AppFooter;
