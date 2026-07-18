"use client";

import { useState } from "react";
import { IconShieldHalfFilled, IconCheck } from "@tabler/icons-react";
import { Button } from "@/com/ui/Button";
import { cn } from "@/lib/cn";
import { solutionsData, solutionsOrder } from "@/data/solutions";

/** Giải pháp theo đối tượng — chọn tab để xem nỗi lo và cam kết tương ứng. */
export const Solutions = () => {
  const [active, setActive] = useState("subject");
  const data = solutionsData[active];

  return (
    <div className="w-full font-sans">
      <div className="mb-7 flex flex-wrap gap-2.5">
        {solutionsOrder.map((key) => {
          const t = solutionsData[key];
          const on = key === active;
          return (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={cn(
                "flex min-w-[200px] flex-1 cursor-pointer flex-col gap-[3px] rounded-xl border p-[14px_20px] text-left transition",
                on
                  ? "border-blue bg-[rgba(12,140,233,.06)] shadow-[0_6px_18px_rgba(12,140,233,.12)]"
                  : "border-line bg-white shadow-none"
              )}
            >
              <span
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.14em]",
                  on ? "text-blue" : "text-[#8a93a3]"
                )}
              >
                {t.kicker}
              </span>
              <span
                className={cn("font-serif text-[18px] font-bold", on ? "text-navy" : "text-mute")}
              >
                {t.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-[18px] inline-flex items-center gap-2.5 rounded-xl border border-[#ffd9da] bg-[#fff2f2] px-[15px] py-2.5">
            <IconShieldHalfFilled size={16} className="text-[#e7000b]" />
            <span className="text-[13.5px] font-semibold text-[#9f0712]">
              Nỗi lo chúng tôi trả lời: <span className="font-normal">{data.fear}</span>
            </span>
          </div>
          <h3 className="mb-3 font-serif text-[26px] font-bold leading-[1.25] text-navy">
            {data.heading}
          </h3>
          <p className="mb-6 max-w-[520px] text-base leading-[1.7] text-mute">{data.blurb}</p>
          <div className="inline-flex">
            <Button href={data.ctaHref} variant="primary" size="lg" className="hui-btn font-bold">
              {data.cta}
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {data.points.map((p) => (
            <div
              key={p.t}
              className="flex items-start gap-3.5 rounded-xl border-[1.5px] border-line bg-[#f7f9fc] px-[18px] py-4 shadow-[0_6px_18px_rgba(15,23,43,.06),0_1.5px_4px_rgba(15,23,43,.05)]"
            >
              <span className="inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-xl bg-[rgba(12,140,233,.1)]">
                <IconCheck size={18} stroke={1.7} className="text-blue" />
              </span>
              <div>
                <div className="text-[15px] font-semibold text-navy">{p.t}</div>
                <div className="mt-0.5 text-sm leading-[1.55] text-mute">{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
