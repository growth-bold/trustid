import { Reveal, Kicker } from "@/com/ui/Reveal";
import { Lookup } from "./Lookup";

/** Mục sổ đăng bạ công khai: tự kiểm chứng một mã uỷ quyền. */
export const LookupSection = () => {
  return (
    <section
      id="tracuu"
      className="scroll-mt-24"
      style={{ background: "linear-gradient(180deg,#f3efe4,#f6f8fb)" }}
    >
      <div className="mx-auto max-w-[1000px] px-8 pb-[70px] pt-[66px] text-center">
        <Reveal>
          <Kicker>Sổ đăng bạ công khai</Kicker>
          <h2 className="mt-3 font-serif text-[34px] font-bold leading-[1.2] text-navy">
            Tra cứu và tự kiểm chứng một uỷ quyền
          </h2>
          <p className="mx-auto mt-3.5 max-w-[640px] text-[16.5px] leading-[1.7] text-mute">
            Nhập mã uỷ quyền để xác minh nó có thật, còn hiệu lực, do ai cấp và cho phạm vi nào. Chúng
            tôi dám để công chúng tự kiểm chứng — đó là tuyên ngôn minh bạch của một định chế chính
            danh.
          </p>
        </Reveal>
        <Reveal className="mt-[30px] rounded-xl border-[1.5px] border-[#dfe4ec] bg-white p-[28px_30px] text-left shadow-[0_12px_34px_rgba(15,23,43,.08)]">
          <Lookup />
        </Reveal>
      </div>
    </section>
  );
};

export default LookupSection;
