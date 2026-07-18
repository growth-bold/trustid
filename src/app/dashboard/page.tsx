import { Dashboard } from "@/com/dashboard/Dashboard";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Bảng điều khiển chủ thể",
  description:
    "Quản lý hồ sơ nhân dạng, giấy phép uỷ quyền, doanh thu bản quyền và quyền đồng ý — toàn cảnh tài sản nhân dạng số của bạn.",
  path: "/dashboard",
  index: false,
});

const DashboardPage = () => {
  return <Dashboard />;
};

export default DashboardPage;
