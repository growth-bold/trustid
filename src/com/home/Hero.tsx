import { Seal } from "@/com/brand/Seal";
import { Button } from "@/com/ui/Button";
import { Reveal } from "@/com/ui/Reveal";
import { DuotoneIcon } from "@/com/icon/duotone";

const GOLD = "#c79a2b";
const GOLD_LIGHT = "#ecd9a3";

const trustPoints = [
  { icon: "justice-scale-1", label: "Căn cứ pháp lý viện dẫn cụ thể" },
  { icon: "safe-vault", label: "Tài khoản thu hộ tách bạch" },
  { icon: "checkup-medical-report-clipboard", label: "Kiểm toán độc lập định kỳ" },
];

/** Khối hero: tuyên ngôn giá trị + chứng nhận bảo hộ mẫu. */
export const Hero = () => {
  return (
    <section
      className="relative overflow-hidden text-[#eaf0f8]"
      style={{
        background:
          "radial-gradient(1200px 600px at 78% -10%, #23385a 0%, var(--tid-navy) 46%, var(--tid-navy-2) 100%)",
      }}
    >
      <div aria-hidden className="pointer-events-none absolute right-[-60px] top-10 opacity-[.06]">
        <svg width="520" height="520" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="95" fill="none" stroke="#fff" strokeWidth="1" />
          <circle cx="100" cy="100" r="78" fill="none" stroke="#fff" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#fff" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-8 pb-[78px] pt-[74px] md:grid-cols-[1.08fr_.92fr]">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(224,182,74,.35)] bg-[rgba(199,154,43,.14)] px-[15px] py-2 text-[13px] font-semibold tracking-[0.01em] text-gold-2">
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 1.5l5 2v3.5c0 3-2 5.2-5 6.5-3-1.3-5-3.5-5-6.5V3.5z" />
              <path d="M6 8l1.4 1.4L10.4 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Được bảo chứng bởi Hiệp hội bảo chứng nhân dạng số
          </span>
          <h1 className="mt-[22px] text-balance font-serif text-[38px] font-bold leading-[1.14] tracking-[0.005em] text-white md:text-[52px]">
            Quyền được bảo hộ và khai thác hợp pháp nhân dạng số của bạn.
          </h1>
          <p className="mt-[22px] max-w-[560px] text-[18.5px] leading-[1.68] text-[#c3cede]">
            Trust ID là định chế đăng ký bảo hộ, cấp phép và{" "}
            <b className="font-semibold text-[#eaf0f8]">thu hộ</b> nhân dạng số — vận hành dưới sự bảo
            chứng của một hiệp hội ngành được nhà nước công nhận. Chúng tôi bảo chứng, thu hộ và phân
            phối minh bạch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/register" variant="primary" size="lg" className="hui-btn">
              Đăng ký bảo hộ nhân dạng
            </Button>
            <Button href="/license" variant="secondary" size="lg" className="hui-btn">
              Xin cấp phép sử dụng
            </Button>
          </div>
          <div className="mt-[34px] flex flex-wrap gap-[26px] border-t border-white/[.12] pt-[26px] text-[13px] text-[#9fb0c8]">
            {trustPoints.map((p) => (
              <span key={p.icon} className="inline-flex items-center gap-2">
                <DuotoneIcon name={p.icon} size={18} color={GOLD} secondaryColor={GOLD_LIGHT} />
                {p.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative">
          <div
            className="rounded-xl border border-[#e6dcbf] p-[26px_26px_22px] shadow-[0_30px_70px_rgba(0,0,0,.4)]"
            style={{ background: "linear-gradient(180deg,#fdfbf5,#f4eeddff)", transform: "rotate(-1.4deg)" }}
          >
            <div className="flex items-start justify-between gap-3.5 border-b border-dashed border-[#d8cfb4] pb-4">
              <div>
                <div className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-gold">
                  Chứng nhận bảo hộ nhân dạng số
                </div>
                <div className="mt-[5px] font-serif text-[21px] font-bold text-navy">
                  Digital Identity Protection
                </div>
              </div>
              <Seal size={66} />
            </div>
            <div className="flex flex-col gap-[13px] pt-4">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#8a93a3]">
                  Chủ thể được bảo hộ
                </div>
                <div className="mt-0.5 font-serif text-[17px] font-semibold text-navy">
                  Nguyễn M. A.
                </div>
              </div>
              <div className="flex gap-[26px]">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#8a93a3]">
                    Mã uỷ quyền
                  </div>
                  <div className="mt-[3px] font-mono text-[15px] tracking-[0.04em] text-navy">
                    TID-2025-0042
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#8a93a3]">
                    Hiệu lực
                  </div>
                  <div className="mt-[3px]">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d0fae5] px-2.5 py-[3px] text-[12.5px] font-semibold text-[#007a55]">
                      <span className="h-[7px] w-[7px] rounded-full bg-current" />
                      Còn hiệu lực
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-0.5 flex items-end justify-between border-t border-dashed border-[#d8cfb4] pt-3.5">
                <div className="text-[11.5px] italic text-[#8a7a4e]">
                  Đối chiếu công khai với sổ đăng bạ
                </div>
                <svg width="86" height="30" viewBox="0 0 86 30" fill="none" stroke="var(--tid-navy)" strokeWidth="1.3">
                  <path d="M2 22c6-14 9 6 14-2s7-12 12-4 8 10 13-2 8 4 13-3 8 6 13 0" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
