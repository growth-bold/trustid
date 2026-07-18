import { Reveal, Kicker } from "@/com/ui/Reveal";
import { DuotoneIcon } from "@/com/icon/duotone";

const BLUE = "#0c8ce9";
const BLUE_LIGHT = "#bcdffb";

/** Vấn đề & sứ mệnh: khoảng trống mà TrustID lấp đầy. */
export const ProblemMission = () => {
  return (
    <section id="vande" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-8 py-[92px]">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[.9fr_1.1fr]">
          <Reveal>
            <Kicker>Vấn đề &amp; sứ mệnh</Kicker>
            <h2 className="mt-3 text-balance font-serif text-[36px] font-bold leading-[1.2] text-navy">
              Nhân dạng bị khai thác. Không ai đứng ra thu và trả tiền cho chủ thể.
            </h2>
            <p className="mt-[18px] text-[16.5px] leading-[1.72] text-mute">
              Khuôn mặt, giọng nói và chân dung số bị dùng trái phép trong quảng cáo, deepfake và nội
              dung AI — không có kênh cấp phép minh bạch, không có ai đứng ra thu và phân phối tiền
              cho chủ thể.
            </p>
            <p className="mt-3.5 text-[16.5px] leading-[1.72] text-mute">
              Trust ID được lập ra để lấp đúng khoảng trống đó: một{" "}
              <b className="font-semibold text-navy">cơ quan cấp phép và thu hộ được bảo chứng</b>,
              đứng giữa chủ thể và bên khai thác.
            </p>
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div className="col-span-full flex gap-3.5 rounded-xl border-[1.5px] border-[#dfe4ec] bg-ivory px-[22px] py-5 shadow-[0_8px_24px_rgba(15,23,43,.07),0_2px_6px_rgba(15,23,43,.05)]">
              <DuotoneIcon name="warning-diamond" size={26} color="#e7000b" secondaryColor="#ffc9cb" />
              <div>
                <div className="text-[15.5px] font-semibold text-navy">
                  Khai thác trái phép, không kiểm soát
                </div>
                <div className="mt-[3px] text-sm leading-[1.55] text-mute">
                  Deepfake và nội dung AI dùng nhân dạng người thật mà không xin phép, không truy vết
                  được.
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 rounded-xl border-[1.5px] border-[#dfe4ec] bg-white px-5 py-[18px] shadow-[0_8px_24px_rgba(15,23,43,.07),0_2px_6px_rgba(15,23,43,.05)]">
              <DuotoneIcon name="wallet" size={24} color={BLUE} secondaryColor={BLUE_LIGHT} />
              <div className="text-[15px] font-semibold text-navy">Dòng tiền mờ ám</div>
              <div className="text-[13.5px] leading-[1.55] text-mute">
                Không rõ tiền thu hộ được giữ ở đâu, có tách bạch không.
              </div>
            </div>
            <div className="flex flex-col gap-2.5 rounded-xl border-[1.5px] border-[#dfe4ec] bg-white px-5 py-[18px] shadow-[0_8px_24px_rgba(15,23,43,.07),0_2px_6px_rgba(15,23,43,.05)]">
              <DuotoneIcon name="shield-1" size={24} color={BLUE} secondaryColor={BLUE_LIGHT} />
              <div className="text-[15px] font-semibold text-navy">Không có bảo chứng</div>
              <div className="text-[13.5px] leading-[1.55] text-mute">
                Giấy phép tự phát không ai đứng sau, dễ đổ vỡ khi tranh chấp.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemMission;
