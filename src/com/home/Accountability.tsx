import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Reveal, Kicker } from "@/com/ui/Reveal";
import { DuotoneIcon } from "@/com/icon/duotone";

const BLUE = "#0c8ce9";
const BLUE_LIGHT = "#bcdffb";

const cards = [
  { icon: "text-file", title: "Điều lệ hoạt động", action: "Xem tài liệu" },
  { icon: "coin-share", title: "Biểu phí công khai", action: "Xem biểu phí" },
  { icon: "graph-bar-increase-square", title: "Báo cáo thường niên", action: "Tải báo cáo" },
];

/** Minh bạch & trách nhiệm giải trình: điều lệ, biểu phí, báo cáo, khiếu nại. */
export const Accountability = () => {
  return (
    <section className="scroll-mt-24 bg-ivory">
      <div className="mx-auto max-w-[1200px] px-8 py-20">
        <Reveal className="mb-9 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <Kicker>Minh bạch &amp; trách nhiệm giải trình</Kicker>
            <h2 className="mt-3 font-serif text-[32px] font-bold leading-[1.22] text-navy">
              Một định chế dám công bố cách khiếu nại mình
            </h2>
          </div>
          <p className="text-base leading-[1.7] text-mute">
            Điều lệ, biểu phí, báo cáo thường niên và kênh giải quyết tranh chấp đều công khai — để
            trách nhiệm giải trình không dừng ở lời nói.
          </p>
        </Reveal>
        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <Link
              key={c.title}
              href="#"
              className="flex flex-col gap-3 rounded-xl border-[1.5px] border-[#dfe4ec] bg-white p-[22px] shadow-[0_8px_24px_rgba(15,23,43,.07),0_2px_6px_rgba(15,23,43,.05)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(15,23,43,.1)]"
            >
              <DuotoneIcon name={c.icon} size={24} color={BLUE} secondaryColor={BLUE_LIGHT} />
              <div className="text-[15px] font-semibold text-navy">{c.title}</div>
              <span className="inline-flex items-center gap-1.5 text-[13px] text-blue-2">
                {c.action} <IconArrowUpRight size={12} stroke={1.6} />
              </span>
            </Link>
          ))}
          <Link
            href="#"
            className="flex flex-col gap-3 rounded-xl border border-navy bg-navy p-[22px] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(15,23,43,.24)]"
          >
            <DuotoneIcon name="chat-bubble-text-square" size={24} color="#c79a2b" secondaryColor="#ecd9a3" />
            <div className="text-[15px] font-semibold text-white">Kênh khiếu nại &amp; tranh chấp</div>
            <span className="inline-flex items-center gap-1.5 text-[13px] text-gold-2">
              Gửi khiếu nại <IconArrowUpRight size={12} stroke={1.6} />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default Accountability;
