import { Reveal, Kicker } from "@/com/ui/Reveal";
import { Faq } from "./Faq";

/** Mục câu hỏi thường gặp. */
export const FaqSection = () => {
  return (
    <section id="faq" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[920px] px-8 py-[92px]">
        <Reveal className="mb-10 text-center">
          <Kicker>Câu hỏi thường gặp</Kicker>
          <h2 className="mt-3 font-serif text-[36px] font-bold leading-[1.2] text-navy">
            Trả lời thẳng những câu hỏi pháp lý
          </h2>
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
      </div>
    </section>
  );
};

export default FaqSection;
