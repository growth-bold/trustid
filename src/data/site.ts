/** Hằng số dùng chung toàn site TrustID. */

export const org = {
  name: "TrustID",
  tagline: "Hiệp hội bảo chứng nhân dạng số",
  license: "0123/GP-HHBCND",
  hotline: "1900 0000",
  email: "lienhe@trustid.vn",
  taxCode: "0123456789",
};

/** Điều hướng chính trên header (trỏ về các mục của trang chủ). */
export const mainNav = [
  { label: "Cơ chế", href: "/#cochevanhanh" },
  { label: "Vai trò thể chế", href: "/#vaitro" },
  { label: "Pháp lý", href: "/#phaply" },
  { label: "Minh bạch tài chính", href: "/#minhbach" },
  { label: "Hỏi đáp", href: "/#faq" },
];

/** Căn cứ pháp lý viện dẫn. */
export const legalReferences = [
  { title: "Luật Bảo vệ dữ liệu cá nhân", code: "Số 91/2025/QH15" },
  { title: "Nghị định", code: "Số 356/2025/NĐ-CP" },
  { title: "Nghị định", code: "Số 69/2024/NĐ-CP" },
];

export const footerNav = {
  about: {
    title: "Về Trust ID",
    links: [
      { label: "Cơ chế vận hành", href: "/#cochevanhanh" },
      { label: "Vai trò thể chế", href: "/#vaitro" },
      { label: "Bảo chứng pháp lý", href: "/#phaply" },
      { label: "Ban lãnh đạo", href: "/#uytin" },
    ],
  },
  forYou: {
    title: "Dành cho bạn",
    links: [
      { label: "Đăng ký bảo hộ", href: "/register" },
      { label: "Xin cấp phép", href: "/license" },
      { label: "Tra cứu mã uỷ quyền", href: "/#tracuu" },
      { label: "Câu hỏi thường gặp", href: "/#faq" },
    ],
  },
  legal: {
    title: "Minh bạch & pháp lý",
    links: [
      { label: "Chính sách dữ liệu cá nhân", href: "#" },
      { label: "Điều khoản sử dụng", href: "#" },
      { label: "Biểu phí công khai", href: "#" },
      { label: "Kênh khiếu nại", href: "#" },
    ],
  },
};
