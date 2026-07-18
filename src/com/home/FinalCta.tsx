import { IconMapPin, IconId, IconUser, IconPhone } from "@tabler/icons-react";
import { Seal } from "@/com/brand/Seal";
import { Button } from "@/com/ui/Button";
import { Reveal } from "@/com/ui/Reveal";
import { org } from "@/data/site";

const ContactRow = ({ icon: Icon, label, children }) => (
  <div className="flex items-start gap-3">
    <Icon size={18} stroke={1.5} className="mt-px shrink-0 text-gold-2" />
    <div>
      <div className="text-xs text-[#8ea0ba]">{label}</div>
      <div className="mt-px text-[14.5px] text-[#eaf0f8]">{children}</div>
    </div>
  </div>
);

/** CTA cuối trang + định danh pháp nhân. */
export const FinalCta = () => {
  return (
    <section
      id="lienhe"
      className="scroll-mt-24 text-[#eaf0f8]"
      style={{ background: "linear-gradient(180deg,var(--tid-navy),var(--tid-navy-2))" }}
    >
      <div className="mx-auto max-w-[1200px] px-8 py-[82px]">
        <Reveal className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <h2 className="text-balance font-serif text-[38px] font-bold leading-[1.18] text-white">
              Bắt đầu bằng đúng lối vào dành cho bạn
            </h2>
            <p className="mt-[18px] max-w-[500px] text-[16.5px] leading-[1.7] text-[#bcc9dc]">
              Dù bạn là chủ thể muốn được bảo hộ hay doanh nghiệp cần cấp phép hợp pháp — mọi con
              đường đều đi qua một định chế được bảo chứng.
            </p>
            <div className="mt-[30px] flex flex-wrap gap-3">
              <Button href="/register" variant="primary" size="lg" className="hui-btn">
                Đăng ký bảo hộ nhân dạng
              </Button>
              <Button href="/license" variant="secondary" size="lg" className="hui-btn">
                Xin cấp phép sử dụng
              </Button>
            </div>
          </div>
          <div className="rounded-xl border border-white/[.14] bg-white/[.05] px-[30px] py-7">
            <div className="mb-5 flex items-center gap-3">
              <Seal size={48} />
              <div className="text-[15px] font-semibold text-white">Định danh pháp nhân</div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <ContactRow icon={IconMapPin} label="Trụ sở">
                Tầng __, Toà nhà __, Quận __, TP. Hà Nội
              </ContactRow>
              <ContactRow icon={IconId} label="Mã số doanh nghiệp / Giấy phép">
                <span className="font-mono">
                  {org.taxCode} · {org.license}
                </span>
              </ContactRow>
              <ContactRow icon={IconUser} label="Đại diện pháp lý">
                [Họ và tên] — Người đại diện theo pháp luật
              </ContactRow>
              <ContactRow icon={IconPhone} label="Đường dây chính thức">
                {org.hotline} · {org.email}
              </ContactRow>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default FinalCta;
