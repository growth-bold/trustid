import { Reveal, Kicker } from "@/com/ui/Reveal";
import { Solutions } from "./Solutions";

/** Giải pháp theo từng đối tượng. */
export const SolutionsSection = () => {
  return (
    <section id="giaiphap" className="scroll-mt-24 bg-ivory">
      <div className="mx-auto max-w-[1200px] px-8 py-[92px]">
        <Reveal className="mx-auto mb-2 max-w-[680px] text-center">
          <Kicker>Giải pháp theo từng đối tượng</Kicker>
          <h2 className="mb-[34px] mt-3 font-serif text-[36px] font-bold leading-[1.2] text-navy">
            Mỗi nhóm có một nỗi lo — chúng tôi trả lời đúng nỗi lo đó
          </h2>
        </Reveal>
        <Reveal>
          <Solutions />
        </Reveal>
      </div>
    </section>
  );
};

export default SolutionsSection;
