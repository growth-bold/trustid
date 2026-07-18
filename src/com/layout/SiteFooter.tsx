import Link from "next/link";
import { IconLock, IconShield } from "@tabler/icons-react";
import { Seal } from "@/com/brand/Seal";
import { footerNav, org } from "@/data/site";

const FooterColumn = ({ title, links }) => (
  <div>
    <div className="mb-3.5 text-[13px] font-semibold tracking-[0.04em] text-white">{title}</div>
    <div className="flex flex-col gap-2.5">
      {links.map((l) => (
        <Link key={l.label} href={l.href} className="text-[#9fb0c8] transition-colors hover:text-white">
          {l.label}
        </Link>
      ))}
    </div>
  </div>
);

/** Chân trang dùng chung. */
export const SiteFooter = () => {
  return (
    <footer className="bg-navy-3 text-sm text-[#9fb0c8]">
      <div className="mx-auto max-w-[1200px] px-8 pb-6 pt-14">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Seal size={52} />
              <div>
                <div className="font-serif text-[19px] font-bold text-white">{org.name}</div>
                <div className="text-[11.5px] text-[#7d8ea8]">VietID Trust</div>
              </div>
            </div>
            <p className="mt-[18px] max-w-[280px] text-[13.5px] leading-[1.65] text-[#8ea0ba]">
              Định chế đăng ký bảo hộ, cấp phép và thu hộ nhân dạng số, dưới sự bảo chứng của Hiệp
              hội bảo chứng nhân dạng số.
            </p>
            <div className="mt-[18px] flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.06] px-2.5 py-[5px] text-[11.5px] text-[#c3cede]">
                <IconLock size={12} stroke={1.5} className="text-gold-2" />
                Dữ liệu lưu trú tại VN
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[.06] px-2.5 py-[5px] text-[11.5px] text-[#c3cede]">
                <IconShield size={12} stroke={1.5} className="text-gold-2" />
                Kiểm toán độc lập
              </span>
            </div>
          </div>
          <FooterColumn {...footerNav.about} />
          <FooterColumn {...footerNav.forYou} />
          <FooterColumn {...footerNav.legal} />
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-[22px] text-[12.5px] text-[#7d8ea8]">
          <span>
            © 2026 Trust ID · Giấy phép hoạt động số {org.license} · MSDN {org.taxCode}
          </span>
          <span className="inline-flex flex-wrap items-center gap-3.5">
            <span>Căn cứ: Luật 91/2025/QH15 · NĐ 356/2025/NĐ-CP · NĐ 69/2024/NĐ-CP</span>
            <span className="text-[#5f7089]">Cập nhật: 07/2026</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
