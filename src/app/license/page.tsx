import Link from "next/link";
import { IconSearch } from "@tabler/icons-react";
import { AppHeader } from "@/com/layout/AppHeader";
import { LicenseApp } from "@/com/license/LicenseApp";

const LicensePage = () => {
  return (
    <>
      <AppHeader
        subtitle="Hiệp hội bảo chứng nhân dạng số"
        right={
          <>
            {/* <Link
              href="/#tracuu"
              className="hidden items-center gap-1.5 text-[13px] text-mute md:inline-flex"
            >
              <IconSearch size={13} stroke={1.6} />
              Tra cứu giấy phép công khai
            </Link>
            <span className="text-[13.5px] text-mute">Bên khai thác</span> */}
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-[10px] bg-navy px-4 py-2 text-sm font-semibold text-white"
            >
              Bảng điều khiển
            </Link>
          </>
        }
      />
      <LicenseApp />
    </>
  );
};

export default LicensePage;
