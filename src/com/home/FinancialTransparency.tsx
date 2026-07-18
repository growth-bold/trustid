import { Reveal, Kicker } from "@/com/ui/Reveal";
import { DuotoneIcon } from "@/com/icon/duotone";

const FlowArrow = () => (
  <svg width="34" height="16" viewBox="0 0 34 16" fill="none" stroke="var(--tid-blue)" strokeWidth="1.6" className="max-md:rotate-90 max-md:justify-self-center">
    <path d="M2 8h28M25 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const stats = [
  { label: "Phí dịch vụ", value: "12%", suffix: " / giao dịch" },
  { label: "Kỳ đối soát", value: "Hàng tháng" },
  { label: "Kỳ thanh toán", value: "≤ 15 ngày" },
  { label: "Báo cáo chủ thể", value: "Bảng kê" },
];

/** Minh bạch tài chính thu hộ: dòng tiền đi đâu, ai giữ, khi nào trả. */
export const FinancialTransparency = () => {
  return (
    <section id="minhbach" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-8 py-[92px]">
        <Reveal className="max-w-[720px]">
          <Kicker>Minh bạch tài chính thu hộ</Kicker>
          <h2 className="mt-3 font-serif text-[36px] font-bold leading-[1.2] text-navy">
            Dòng tiền đi đâu, ai giữ, khi nào trả
          </h2>
          <p className="mt-4 text-[16.5px] leading-[1.7] text-mute">
            Im lặng về dòng tiền bị đọc thành rủi ro chiếm dụng. Vì vậy chúng tôi công khai toàn bộ.
          </p>
        </Reveal>

        <Reveal className="mt-10 overflow-hidden rounded-xl border-[1.5px] border-[#dfe4ec] shadow-[0_8px_24px_rgba(15,23,43,.07),0_2px_6px_rgba(15,23,43,.05)]">
          <div className="grid grid-cols-1 items-center gap-3.5 bg-ivory px-[26px] py-8 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-0">
            <div className="text-center">
              <span className="mb-3 inline-flex h-[54px] w-[54px] items-center justify-center rounded-xl border-[1.5px] border-[#dfe4ec] bg-white shadow-[0_8px_24px_rgba(15,23,43,.07),0_2px_6px_rgba(15,23,43,.05)]">
                <DuotoneIcon name="office-building-1" size={26} color="#19283d" secondaryColor="#aab6c7" />
              </span>
              <div className="text-[15px] font-semibold text-navy">Bên khai thác trả phí</div>
              <div className="mt-[3px] text-[12.5px] text-mute">Theo giấy phép đã cấp</div>
            </div>
            <FlowArrow />
            <div className="text-center">
              <span className="mb-3 inline-flex h-[54px] w-[54px] items-center justify-center rounded-xl bg-navy">
                <DuotoneIcon name="safe-vault" size={26} color="#c79a2b" secondaryColor="#ecd9a3" />
              </span>
              <div className="text-[15px] font-semibold text-navy">Tài khoản thu hộ tách bạch</div>
              <div className="mt-[3px] text-[12.5px] text-mute">Độc lập với tài khoản vận hành</div>
            </div>
            <FlowArrow />
            <div className="text-center">
              <span className="mb-3 inline-flex h-[54px] w-[54px] items-center justify-center rounded-xl bg-[rgba(0,153,102,.12)]">
                <DuotoneIcon name="user-feedback-heart" size={26} color="#009966" secondaryColor="#a7e8cf" />
              </span>
              <div className="text-[15px] font-semibold text-navy">Phân phối cho chủ thể</div>
              <div className="mt-[3px] text-[12.5px] text-mute">Kèm báo cáo dòng tiền</div>
            </div>
          </div>
          <div className="grid grid-cols-2 border-t border-line md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="border-line px-6 py-[22px] max-md:odd:border-r md:[&:not(:last-child)]:border-r">
                <div className="text-xs font-semibold uppercase tracking-[0.05em] text-[#8a93a3]">
                  {s.label}
                </div>
                <div className="mt-1 font-serif text-[26px] font-bold text-navy">
                  {s.value}
                  {s.suffix && <span className="text-[13px] font-medium text-mute">{s.suffix}</span>}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <p className="mt-3.5 text-[12.5px] text-[#8a93a3]">
          * Mức phí và kỳ hạn trên là số liệu minh hoạ cho mục đích trình bày, không phải biểu phí
          chính thức.
        </p>
      </div>
    </section>
  );
};

export default FinancialTransparency;
