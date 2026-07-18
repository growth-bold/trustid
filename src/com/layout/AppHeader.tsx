import Link from "next/link";
import { IconShield, IconLock } from "@tabler/icons-react";
import { Seal } from "@/com/brand/Seal";
import { org } from "@/data/site";

/**
 * Header gọn cho các trang ứng dụng nội bộ (Đăng ký / Dashboard / Cấp phép).
 * `subtitle` đổi dòng mô tả dưới logo; `right` là nội dung phía phải header.
 */
export const AppHeader = ({ subtitle, right }) => {
  return (
    <header className="sticky top-0 z-[60]">
      <div className="bg-navy-2 text-[12.5px] text-[#c3cede]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-8 py-2">
          <span className="inline-flex items-center gap-2">
            <IconShield size={13} stroke={1.5} className="text-gold-2" />
            Giấy phép hoạt động số{" "}
            <b className="font-semibold tracking-[0.02em] text-[#e8eef7]">{org.license}</b>
          </span>
          <span className="inline-flex items-center gap-2">
            <IconLock size={12} stroke={1.5} className="text-gold-2" />
            Dữ liệu lưu trú tại Việt Nam
          </span>
        </div>
      </div>
      <div className="border-b border-line bg-white/[.92] backdrop-blur-[10px] backdrop-saturate-150">
        <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-8 py-3">
          <Link href="/" className="flex shrink-0 items-center gap-[13px]">
            <Seal size={46} />
            <span className="flex flex-col leading-[1.15]">
              <span className="font-serif text-[20px] font-bold tracking-[0.01em] text-navy">
                {org.name}
              </span>
              <span className="text-[11px] tracking-[0.02em] text-mute">{subtitle}</span>
            </span>
          </Link>
          <div className="ml-auto flex items-center gap-2.5">{right}</div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
