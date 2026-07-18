import { Reveal, Kicker } from "@/com/ui/Reveal";
import { Seal } from "@/com/brand/Seal";
import { DuotoneIcon } from "@/com/icon/duotone";

const DownArrow = () => (
  <div className="flex justify-center text-white/[.28]">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M10 3v14M5 12l5 5 5-5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

/** Vai trò & quan hệ thể chế: ba lớp, tách bạch quyền lực. */
export const InstitutionalRoles = () => {
  return (
    <section
      id="vaitro"
      className="scroll-mt-24 text-[#eaf0f8]"
      style={{
        background: "linear-gradient(180deg,var(--tid-navy),var(--tid-navy-2))",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-8 py-[92px]">
        <Reveal className="mb-11 grid grid-cols-1 items-end gap-10 md:grid-cols-2">
          <div>
            <Kicker className="text-gold-2">
              Vai trò &amp; quan hệ thể chế
            </Kicker>
            <h2 className="mt-3 font-serif text-[36px] font-bold leading-[1.2] text-white">
              Ba lớp, tách bạch quyền lực
            </h2>
          </div>
          <p className="text-base leading-[1.7] text-[#bcc9dc]">
            Đơn vị thu tiền{" "}
            <b className="font-semibold text-white">không phải</b> là đơn vị tự
            cấp phép cho chính mình. Việc tách bạch này là điều kiện để người uỷ
            thác yên tâm.
          </p>
        </Reveal>

        <Reveal className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row items-center gap-[22px] rounded-xl border border-[rgba(224,182,74,.3)] bg-[rgba(224,182,74,.1)] px-[26px] py-[22px] relative">
            <Seal size={58} />
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="font-serif text-[20px] font-bold text-white">
                  Hiệp hội bảo chứng
                </span>
                <span className="absolute md:static right-1 top-1 rounded-lg md:rounded-full border border-[rgba(224,182,74,.4)] px-[9px] py-[3px] text-[11px] font-bold uppercase tracking-[0.06em] text-gold-2">
                  Cơ quan bảo chứng
                </span>
              </div>
              <div className="mt-3 md:mt-[5px] text-[14.5px] leading-[1.55] text-[#c3cede]">
                Xác thực tư cách chủ thể · Cấp phép · Giám sát hoạt động
              </div>
            </div>
          </div>

          <DownArrow />

          <div className="flex flex-col md:flex-row items-center gap-[22px] rounded-xl border border-white/[.14] bg-white/[.05] px-[26px] py-[22px] relative">
            <span className="inline-flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-xl bg-[rgba(12,140,233,.16)]">
              <DuotoneIcon
                name="padlock-square-1"
                size={28}
                color="#0c8ce9"
                secondaryColor="#9cc9f5"
              />
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="font-serif text-[20px] font-bold text-white">
                  Nền tảng vận hành Trust ID
                </span>
                <span className="absolute md:static right-1 top-1 rounded-lg md:rounded-full border border-[rgba(12,140,233,.4)] px-[9px] py-[3px] text-[11px] font-bold uppercase tracking-[0.06em] text-[#7fc0f5]">
                  Đơn vị vận hành
                </span>
              </div>
              <div className="mt-3 md:mt-[5px] text-[14.5px] leading-[1.55] text-[#c3cede]">
                Đăng ký · Thu hộ · Đối soát · Phân phối — chịu giám sát của hiệp
                hội
              </div>
            </div>
          </div>

          <DownArrow />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center gap-[18px] rounded-xl border border-white/[.14] bg-white/[.05] px-[22px] py-5">
              <span className="inline-flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-white/[.08]">
                <DuotoneIcon
                  name="user-circle-single"
                  size={26}
                  color="#cdd8e8"
                  secondaryColor="#8ea0ba"
                />
              </span>
              <div>
                <div className="font-serif text-[17px] font-bold text-white">
                  Chủ thể
                </div>
                <div className="mt-[3px] text-[13.5px] leading-[1.5] text-[#c3cede]">
                  Uỷ thác nhân dạng &amp; quyền thu hộ
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[18px] rounded-xl border border-white/[.14] bg-white/[.05] px-[22px] py-5">
              <span className="inline-flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-white/[.08]">
                <DuotoneIcon
                  name="office-building-1"
                  size={26}
                  color="#cdd8e8"
                  secondaryColor="#8ea0ba"
                />
              </span>
              <div>
                <div className="font-serif text-[17px] font-bold text-white">
                  Bên khai thác
                </div>
                <div className="mt-[3px] text-[13.5px] leading-[1.5] text-[#c3cede]">
                  Khai thác hợp pháp dưới giấy phép
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default InstitutionalRoles;
