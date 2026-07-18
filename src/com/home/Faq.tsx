"use client";

import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { cn } from "@/lib/cn";
import { faqItems } from "@/data/faq";

/** Danh sách câu hỏi thường gặp dạng accordion. */
export const Faq = () => {
  const [open, setOpen] = useState({ 0: true });

  return (
    <div className="flex w-full flex-col gap-3 font-sans">
      {faqItems.map((it, i) => {
        const isOpen = !!open[i];
        return (
          <div
            key={i}
            className="overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_2px_rgba(15,23,43,.05)]"
          >
            <button
              onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
              className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent p-[20px_22px] text-left"
            >
              <span className="flex items-center gap-3.5">
                <span className="w-[42px] shrink-0 font-serif text-[26px] font-bold leading-none text-blue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-[18px] font-semibold leading-[1.35] text-navy">
                  {it.q}
                </span>
              </span>
              <span
                className={cn(
                  "inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full transition-all",
                  isOpen ? "rotate-180 bg-[rgba(12,140,233,.12)]" : "bg-[#f0f4f9]"
                )}
              >
                <IconChevronDown size={15} stroke={1.8} className="text-navy" />
              </span>
            </button>
            {isOpen && (
              <div className="max-w-[760px] px-[22px] pb-[22px] pl-[78px] text-[15.5px] leading-[1.72] text-mute">
                {it.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Faq;
