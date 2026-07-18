import { IconShield, IconClock, IconLock } from "@tabler/icons-react";
import { org } from "@/data/site";

/** Thanh thông tin định chế phía trên header. */
export const TopBar = () => {
  return (
    <div className="bg-navy-2 text-[12.5px] text-[#c3cede]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-8 py-2">
        <span className="inline-flex items-center gap-2">
          <IconShield size={13} stroke={1.5} className="text-gold-2" />
          Giấy phép hoạt động số{" "}
          <b className="font-semibold tracking-[0.02em] text-[#e8eef7]">{org.license}</b>
        </span>
        <span className="inline-flex flex-wrap items-center gap-5">
          <span className="inline-flex items-center gap-1.5">
            <IconClock size={12} stroke={1.5} />
            Đường dây chính thức <b className="font-semibold text-[#e8eef7]">{org.hotline}</b>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <IconLock size={12} stroke={1.5} className="text-gold-2" />
            Dữ liệu lưu trú tại Việt Nam
          </span>
          <span className="text-[#8ea0ba]">VN</span>
        </span>
      </div>
    </div>
  );
};

export default TopBar;
