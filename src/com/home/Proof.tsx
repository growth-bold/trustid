import { Reveal } from "@/com/ui/Reveal";
import { proofStats, leaders } from "@/data/leadership";

/** Uy tín: con số minh chứng, ban lãnh đạo, đối tác. */
export const Proof = () => {
  return (
    <section id="uytin" className="scroll-mt-24 bg-ivory">
      <div className="mx-auto max-w-[1200px] px-8 py-[92px]">
        <Reveal className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
          {proofStats.map((s, i) =>
            s.highlight ? (
              <div
                key={i}
                className="rounded-xl p-[26px_24px] shadow-[0_16px_38px_rgba(15,23,43,.24)]"
                style={{ background: "linear-gradient(180deg,var(--tid-navy),var(--tid-navy-2))" }}
              >
                <div className="mb-2 inline-flex items-center gap-[7px] text-[11px] font-bold uppercase tracking-[0.08em] text-gold-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-2" />
                  {s.badge}
                </div>
                <div className="font-serif text-[40px] font-bold text-white">{s.value}</div>
                <div className="mt-1 text-[14.5px] text-[#bcc9dc]">{s.label}</div>
              </div>
            ) : (
              <div
                key={i}
                className="rounded-xl border-[1.5px] border-[#dfe4ec] bg-white p-[26px_24px] shadow-[0_8px_24px_rgba(15,23,43,.07),0_2px_6px_rgba(15,23,43,.05)]"
              >
                <div className="font-serif text-[40px] font-bold text-navy">{s.value}</div>
                <div className="mt-1 text-[14.5px] text-mute">{s.label}</div>
              </div>
            )
          )}
        </Reveal>
        <p className="mt-3 text-[12.5px] text-[#8a93a3]">
          * Số liệu minh hoạ cho mục đích trình bày. Chúng tôi ưu tiên công bố con số{" "}
          <b>đã phân phối</b> hơn con số đã thu.
        </p>

        <Reveal className="mt-12">
          <h3 className="mb-1.5 font-serif text-[24px] font-bold text-navy">
            Ban lãnh đạo &amp; hội đồng bảo chứng
          </h3>
          <p className="mb-6 text-[15px] text-mute">Con người thật, chức danh thật đứng sau mỗi cam kết.</p>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((l, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border-[1.5px] border-[#dfe4ec] bg-white shadow-[0_8px_24px_rgba(15,23,43,.07),0_2px_6px_rgba(15,23,43,.05)]"
              >
                <div className="flex aspect-square items-center justify-center bg-[#eef2f7] text-[13px] text-[#a2adbd]">
                  Ảnh chân dung
                </div>
                <div className="px-[18px] py-4">
                  <div className="text-[15px] font-semibold text-navy">{l.name}</div>
                  <div className="mt-0.5 text-[13px] text-blue-2">{l.role}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 border-t border-line pt-[30px]">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-mute">
            Đối tác &amp; cố vấn
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex h-16 items-center justify-center rounded-xl border border-dashed border-[#cfd6e0] text-[13px] text-[#a2adbd]"
              >
                Logo đối tác
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Proof;
