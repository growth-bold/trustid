import { Reveal, Kicker } from "@/com/ui/Reveal";
import { DuotoneIcon } from "@/com/icon/duotone";

const BLUE = "#0c8ce9";
const BLUE_LIGHT = "#bcdffb";

const StepCard = ({ icon, iconBg, iconColor, iconSecondary, num, title, children }) => (
  <div className="rounded-xl border-[1.5px] border-[#dfe4ec] bg-white p-[24px_22px] shadow-[0_8px_24px_rgba(15,23,43,.07),0_2px_6px_rgba(15,23,43,.05)]">
    <div className="flex items-center justify-between">
      <span
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ background: iconBg }}
      >
        <DuotoneIcon name={icon} size={24} color={iconColor} secondaryColor={iconSecondary} />
      </span>
      <span className="font-serif text-[15px] font-bold text-[#c7ceda]">{num}</span>
    </div>
    <h3 className="mb-1.5 mt-4 font-serif text-[18px] font-bold text-navy">{title}</h3>
    <p className="text-sm leading-[1.6] text-mute">{children}</p>
  </div>
);

/** Cơ chế vận hành 4 bước: đăng ký → uỷ quyền → cấp phép & thu hộ → phân phối. */
export const HowItWorks = () => {
  return (
    <section id="cochevanhanh" className="scroll-mt-24 bg-ivory">
      <div className="mx-auto max-w-[1200px] px-8 py-[92px]">
        <Reveal className="mx-auto max-w-[720px] text-center">
          <Kicker>Cơ chế vận hành</Kicker>
          <h2 className="mt-3 font-serif text-[36px] font-bold leading-[1.2] text-navy">
            Đăng ký → Uỷ quyền → Cấp phép &amp; Thu hộ → Phân phối
          </h2>
          <p className="mt-3.5 text-[16.5px] leading-[1.7] text-mute">
            Bốn bước rõ ràng. Phần thu hộ và phân phối tiền được vẽ tường minh: tiền đi vào đâu, ai
            giữ, khi nào trả.
          </p>
        </Reveal>

        <Reveal className="mt-11 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          <StepCard
            icon="fingerprint-1"
            iconBg="rgba(12,140,233,.1)"
            iconColor={BLUE}
            iconSecondary={BLUE_LIGHT}
            num="01"
            title="Đăng ký & xác thực"
          >
            Chủ thể đăng ký, được hiệp hội xác thực tư cách; nhân dạng được ghi nhận bảo hộ.
          </StepCard>
          <StepCard
            icon="check-square"
            iconBg="rgba(12,140,233,.1)"
            iconColor={BLUE}
            iconSecondary={BLUE_LIGHT}
            num="02"
            title="Uỷ quyền minh thị"
          >
            Chủ thể ký uỷ quyền theo phạm vi &amp; thời hạn rõ ràng — và có quyền rút lại bất cứ lúc
            nào.
          </StepCard>

          {/* Bước trọng tâm — thu hộ */}
          <div
            className="relative rounded-xl border border-navy p-[24px_22px] shadow-[0_18px_40px_rgba(15,23,43,.28)]"
            style={{ background: "linear-gradient(180deg,var(--tid-navy),var(--tid-navy-2))" }}
          >
            <span className="absolute -top-[11px] left-[22px] rounded-full bg-gold px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#241c05]">
              Trọng tâm thu hộ
            </span>
            <div className="flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(224,182,74,.2)]">
                <DuotoneIcon name="coin-share" size={24} color="#c79a2b" secondaryColor="#ecd9a3" />
              </span>
              <span className="font-serif text-[15px] font-bold text-white/35">03</span>
            </div>
            <h3 className="mb-1.5 mt-4 font-serif text-[18px] font-bold text-white">
              Cấp phép &amp; Thu hộ
            </h3>
            <p className="mb-3 text-sm leading-[1.6] text-[#bcc9dc]">
              Bên khai thác xin cấp phép; phí chảy thẳng vào tài khoản thu hộ tách bạch.
            </p>
            <div className="flex items-center gap-[7px] rounded-xl border border-white/[.14] bg-white/[.08] px-[11px] py-[9px] text-[11.5px] text-[#eaf0f8]">
              <span className="text-[#9fb0c8]">Khai thác</span>
              <svg width="14" height="10" viewBox="0 0 16 12" fill="none" stroke="var(--tid-gold-2)" strokeWidth="1.4">
                <path d="M1 6h13M10 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-semibold text-gold-2">Tài khoản tách bạch</span>
            </div>
          </div>

          <StepCard
            icon="subscription-cashflow"
            iconBg="rgba(0,153,102,.12)"
            iconColor="#009966"
            iconSecondary="#a7e8cf"
            num="04"
            title="Đối soát & Phân phối"
          >
            Đối soát định kỳ, phân phối tiền về chủ thể kèm báo cáo dòng tiền chi tiết.
          </StepCard>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;
