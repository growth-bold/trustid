import { Reveal, Kicker } from "@/com/ui/Reveal";
import { DuotoneIcon } from "@/com/icon/duotone";

const BLUE = "#0c8ce9";
const BLUE_LIGHT = "#bcdffb";

const LegalCard = ({ icon, title, children }) => (
  <div className="rounded-xl border-[1.5px] border-[#dfe4ec] bg-ivory p-6 shadow-[0_8px_24px_rgba(15,23,43,.07),0_2px_6px_rgba(15,23,43,.05)]">
    <span className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-[rgba(12,140,233,.1)]">
      <DuotoneIcon name={icon} size={22} color={BLUE} secondaryColor={BLUE_LIGHT} />
    </span>
    <h3 className="mb-1.5 mt-3.5 text-base font-semibold text-navy">{title}</h3>
    <p className="text-sm leading-[1.6] text-mute">{children}</p>
  </div>
);

/** Bảo chứng pháp lý & tuân thủ: cam kết như nghĩa vụ. */
export const LegalCompliance = () => {
  return (
    <section id="phaply" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-8 py-[92px]">
        <Reveal className="max-w-[720px]">
          <Kicker>Bảo chứng pháp lý &amp; tuân thủ</Kicker>
          <h2 className="mt-3 font-serif text-[36px] font-bold leading-[1.2] text-navy">
            Cam kết được diễn đạt như nghĩa vụ, không phải lời hứa
          </h2>
        </Reveal>
        <Reveal className="mt-10 grid grid-cols-1 gap-[18px] md:grid-cols-3">
          <LegalCard icon="voice-activation-check-validate" title="Đồng ý minh thị — rút lại bất cứ lúc nào">
            Chủ thể chủ động đồng ý và có quyền rút uỷ quyền tức thời; quyền này là nghĩa vụ ràng buộc
            của nền tảng.
          </LegalCard>
          <LegalCard icon="padlock-square-1" title="Tài khoản thu hộ tách bạch">
            Tiền của chủ thể được giữ tách khỏi tài khoản vận hành của doanh nghiệp, không dùng cho
            mục đích khác.
          </LegalCard>
          <LegalCard icon="security-umbrella" title="Dữ liệu lưu trú tại Việt Nam">
            Thu thập tối thiểu, lưu trú trong nước theo quy định, chịu kiểm toán độc lập định kỳ về
            bảo mật.
          </LegalCard>

          <div className="col-span-full flex items-start gap-4 rounded-xl border border-[#ffd9da] bg-[#fff5f5] px-[26px] py-[22px]">
            <DuotoneIcon name="block-2" size={26} color="#e7000b" secondaryColor="#ffc9cb" />
            <div>
              <h3 className="mb-[5px] text-base font-semibold text-[#9f0712]">
                Ranh giới đạo đức bắt buộc
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-[#7a2226]">
                Không tiếp nhận chủ thể dưới 18 tuổi. Không cấp phép cho mục đích khiêu dâm hoá hoặc
                bôi nhọ nhân dạng. Đây là điều kiện tiên quyết, không thể thương lượng.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default LegalCompliance;
