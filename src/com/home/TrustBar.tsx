import { IconFileText } from "@tabler/icons-react";
import { Seal } from "@/com/brand/Seal";
import { legalReferences } from "@/data/site";

/** Thanh tin cậy: hiệp hội bảo chứng + căn cứ pháp lý viện dẫn. */
export const TrustBar = () => {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-[1200px] px-8 py-[34px]">
        <div className="grid grid-cols-1 items-center gap-[34px] md:grid-cols-[auto_1px_1fr]">
          <div className="flex items-center gap-4">
            <Seal size={62} />
            <div className="max-w-[190px]">
              <div className="text-[14.5px] font-semibold leading-[1.3] text-navy">
                Hiệp hội bảo chứng nhân dạng số
              </div>
              <div className="mt-[3px] text-[12.5px] text-mute">
                Tổ chức nghề nghiệp được nhà nước công nhận · giám sát &amp; bảo chứng
              </div>
            </div>
          </div>
          <div className="hidden h-16 w-px bg-line md:block" />
          <div>
            <div className="mb-3 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-mute">
              Căn cứ pháp lý viện dẫn
            </div>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {legalReferences.map((ref, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 rounded-xl border-[1.5px] border-[#dfe4ec] bg-ivory px-3.5 py-3 shadow-[0_8px_24px_rgba(15,23,43,.07),0_2px_6px_rgba(15,23,43,.05)]"
                >
                  <IconFileText size={19} stroke={1.5} className="mt-px shrink-0 text-blue" />
                  <div>
                    <div className="text-[13px] font-semibold leading-[1.35] text-navy">
                      {ref.title}
                    </div>
                    <div className="mt-0.5 font-mono text-[12.5px] text-blue-2">{ref.code}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
