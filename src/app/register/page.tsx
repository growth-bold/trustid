import Link from "next/link";
import { IconLock } from "@tabler/icons-react";
import { AppHeader } from "@/com/layout/AppHeader";
import { AppFooter } from "@/com/layout/AppFooter";
import { RegisterWizard } from "@/com/register/RegisterWizard";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-ivory">
      <AppHeader
        subtitle="Hiệp hội bảo chứng nhân dạng số"
        right={
          <>
            <span className="hidden items-center gap-[7px] rounded-full border border-[#a7e8cf] bg-[#00bc7d29] px-3 py-1.5 text-[13px] text-[#00bc7d] md:inline-flex">
              <IconLock size={13} stroke={1.7} className="text-[#00bc7d]" />
              Kết nối được mã hoá đầu cuối
            </span>
            <span className="text-[13.5px] text-mute hidden md:inline">
              Đã có tài khoản?
            </span>
            <Link
              href="/dashboard"
              className="text-sm font-semibold text-blue-2"
            >
              Đăng nhập
            </Link>
          </>
        }
      />
      <RegisterWizard />
      <AppFooter />
    </div>
  );
};

export default RegisterPage;
