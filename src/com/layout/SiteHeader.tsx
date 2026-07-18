import Link from "next/link";
import { IconSearch } from "@tabler/icons-react";
import { Seal } from "@/com/brand/Seal";
import { Button } from "@/com/ui/Button";
import { TopBar } from "./TopBar";
import { mainNav, org } from "@/data/site";

/**
 * Header dùng chung cho mọi trang.
 * `ctaHref` cho phép trang khác đổi đích nút Tra cứu (mặc định về mục tra cứu trang chủ).
 */
export const SiteHeader = ({ ctaHref = "/#tracuu" }) => {
  return (
    <header className="sticky top-0 z-[60]">
      <TopBar />
      <div className="border-b border-line bg-white/[.92] backdrop-blur-[10px] backdrop-saturate-150">
        <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-8 py-3">
          <Link href="/" className="flex shrink-0 items-center gap-[13px]">
            <Seal size={46} />
            <span className="flex flex-col leading-[1.15]">
              <span className="font-serif text-[20px] font-bold tracking-[0.01em] text-navy">
                {org.name}
              </span>
              <span className="text-[11px] tracking-[0.02em] text-mute">{org.tagline}</span>
            </span>
          </Link>
          <nav className="ml-auto hidden items-center gap-[26px] text-[14.5px] font-medium lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink transition-colors hover:text-blue"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2.5 max-lg:ml-auto">
            <Button href={ctaHref} variant="primary" size="md" className="hui-btn gap-1.5">
              <IconSearch size={15} stroke={1.8} />
              Tra cứu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
